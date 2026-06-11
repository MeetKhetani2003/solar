import mongoose from "mongoose";
import ProductMedia from "./models/ProductMedia";

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/solar";

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

let cached: MongooseCache = (global as unknown as { mongoose: MongooseCache | undefined }).mongoose as MongooseCache;

if (!cached) {
  cached = (global as unknown as { mongoose: MongooseCache }).mongoose = { conn: null, promise: null };
}

export async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongooseInstance) => {
      // Seed default videos in the background
      seedDefaultVideos().catch((err) => console.error("Error seeding default videos:", err));
      return mongooseInstance;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

async function seedDefaultVideos() {
  try {
    // Check if cow-dung-log-machine media already exists
    const existing = await ProductMedia.findOne({ productSlug: "cow-dung-log-machine" });
    if (!existing) {
      const defaultUrls = [
        "https://youtu.be/mmwYx1BaXmk?si=cmUajSuE-vcbrcNF",
        "https://youtube.com/shorts/nbEygqnfZPI?si=-AD0mQ5a3-pqm_Fi",
        "https://youtu.be/GgnXB18aAhc?si=u2M-RMPTcJmYPe6s",
        "https://youtu.be/vp4-W8SUjq0?si=k5yD85WOROuxdhUV"
      ];
      await ProductMedia.create({
        productSlug: "cow-dung-log-machine",
        youtubeUrls: defaultUrls
      });
      console.log("Seeded default YouTube videos for cow-dung-log-machine");
    }
  } catch (error) {
    console.error("Seeding error:", error);
  }
}
