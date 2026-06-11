import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectDB } from "@/lib/db";
import ProductMedia from "@/lib/models/ProductMedia";

export async function POST(request: Request) {
  try {
    await connectDB();
    const { productSlug, fileId, youtubeUrl } = await request.json();

    if (!productSlug) {
      return NextResponse.json({ error: "Product slug is required" }, { status: 400 });
    }

    // Delete image from GridFS
    if (fileId) {
      if (!mongoose.Types.ObjectId.isValid(fileId)) {
        return NextResponse.json({ error: "Invalid File ID" }, { status: 400 });
      }

      const bucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db!, {
        bucketName: "product_images",
      });

      const objectId = new mongoose.Types.ObjectId(fileId);
      await bucket.delete(objectId);
    }

    // Remove YouTube URL
    if (youtubeUrl) {
      await ProductMedia.findOneAndUpdate(
        { productSlug },
        { $pull: { youtubeUrls: youtubeUrl } }
      );
    }

    // Fetch updated list of media
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
    console.error("Error in POST /api/admin/media/delete:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
