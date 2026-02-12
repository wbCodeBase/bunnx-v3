// models/Category.ts
import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ICategory {
  name: string;
  slug: string;
  description?: string;
  image?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICategoryDocument extends ICategory, Document {}

const CategorySchema = new Schema<ICategoryDocument>(
  { 
    name: {
      type: String,
      required: [true, 'Category name is required'],
      unique: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    description: {
      type: String,
      maxlength: 500,
    },
    image: String,
  },
  {
    timestamps: true,
  }
);



export default mongoose.models.Category || mongoose.model('Category', CategorySchema);
// const Category: Model<ICategoryDocument> = mongoose.models.Category || mongoose.model<ICategoryDocument>('Category', CategorySchema);

// export default Category;