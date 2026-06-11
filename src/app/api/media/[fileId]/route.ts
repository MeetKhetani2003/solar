import mongoose from "mongoose";
import { connectDB } from "@/lib/db";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ fileId: string }> }
) {
  try {
    await connectDB();
    const { fileId } = await params;

    if (!mongoose.Types.ObjectId.isValid(fileId)) {
      return new Response("Invalid File ID", { status: 400 });
    }

    const bucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db!, {
      bucketName: "product_images",
    });

    const objectId = new mongoose.Types.ObjectId(fileId);

    // Find the file to get metadata like content type
    const files = await bucket.find({ _id: objectId }).toArray();
    if (!files || files.length === 0) {
      return new Response("File Not Found", { status: 404 });
    }

    const file = files[0];
    const contentType = file.metadata?.contentType || "image/jpeg";

    const downloadStream = bucket.openDownloadStream(objectId);

    // Convert download stream to Response readable stream
    const readableStream = new ReadableStream({
      start(controller) {
        downloadStream.on("data", (chunk) => {
          controller.enqueue(chunk);
        });
        downloadStream.on("end", () => {
          controller.close();
        });
        downloadStream.on("error", (err) => {
          controller.error(err);
        });
      },
    });

    return new Response(readableStream, {
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (error) {
    console.error("Error serving GridFS media:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
