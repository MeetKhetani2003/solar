import mongoose, { Schema, Document } from "mongoose";

export interface IProductMedia extends Document {
  productSlug: string;
  youtubeUrls: string[];
}

const ProductMediaSchema: Schema = new Schema(
  {
    productSlug: { type: String, required: true, unique: true },
    youtubeUrls: { type: [String], default: [] }
  },
  {
    timestamps: true
  }
);

export default mongoose.models.ProductMedia || mongoose.model<IProductMedia>("ProductMedia", ProductMediaSchema);
