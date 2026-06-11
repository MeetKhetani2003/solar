import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectDB } from "@/lib/db";
import ProductMedia from "@/lib/models/ProductMedia";

export async function GET(request: Request) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const productSlug = searchParams.get("productSlug");

    if (!productSlug) {
      return NextResponse.json({ error: "Product slug is required" }, { status: 400 });
    }

    // 1. Fetch YouTube URLs
    const mediaDoc = await ProductMedia.findOne({ productSlug });
    const youtubeUrls = mediaDoc ? mediaDoc.youtubeUrls : [];

    // 2. Fetch GridFS Images
    const bucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db!, {
      bucketName: "product_images",
    });

    const files = await bucket.find({ "metadata.productSlug": productSlug }).toArray();
    const images = files.map((file) => ({
      fileId: file._id.toString(),
      filename: file.filename,
      uploadDate: file.uploadDate,
      url: `/api/media/${file._id}`,
    }));

    return NextResponse.json({ youtubeUrls, images });
  } catch (error) {
    console.error("Error in GET /api/admin/media:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await connectDB();
    const formData = await request.formData();
    const productSlug = formData.get("productSlug") as string;
    const youtubeUrl = formData.get("youtubeUrl") as string | null;
    const file = formData.get("file") as File | null;

    if (!productSlug) {
      return NextResponse.json({ error: "Product slug is required" }, { status: 400 });
    }

    // Handle File upload
    if (file) {
      if (!file.type.startsWith("image/")) {
        return NextResponse.json({ error: "Only images are allowed" }, { status: 400 });
      }

      const buffer = Buffer.from(await file.arrayBuffer());
      const bucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db!, {
        bucketName: "product_images",
      });

      const uploadStream = bucket.openUploadStream(file.name, {
        metadata: { productSlug, contentType: file.type },
      });

      await new Promise<void>((resolve, reject) => {
        uploadStream.write(buffer, (err) => {
          if (err) reject(err);
          else uploadStream.end(resolve);
        });
      });
    }

    // Handle YouTube URL addition
    if (youtubeUrl) {
      // Validate YouTube URL
      const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/;
      if (!youtubeRegex.test(youtubeUrl)) {
        return NextResponse.json({ error: "Invalid YouTube URL" }, { status: 400 });
      }

      await ProductMedia.findOneAndUpdate(
        { productSlug },
        { $addToSet: { youtubeUrls: youtubeUrl } },
        { upsert: true, new: true }
      );
    }

    // Return updated lists
    const mediaDoc = await ProductMedia.findOne({ productSlug });
    const youtubeUrls = mediaDoc ? mediaDoc.youtubeUrls : [];

    const bucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db!, {
      bucketName: "product_images",
    });
    const files = await bucket.find({ "metadata.productSlug": productSlug }).toArray();
    const images = files.map((f) => ({
      fileId: f._id.toString(),
      filename: f.filename,
      uploadDate: f.uploadDate,
      url: `/api/media/${f._id}`,
    }));

    return NextResponse.json({ success: true, youtubeUrls, images });
  } catch (error) {
    console.error("Error in POST /api/admin/media:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
