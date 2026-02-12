// models/Blog.ts
import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IBlog {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  inlineImages: string[];
  author: {
    id: string;
    name: string;
    email: string;
    avatar?: string;
  };
  featuredImage: {
    url: string;
    publicId: string;
    alt: string;
    width: number;
    height: number;
  };
  categories: [{
  type: Schema.Types.ObjectId,
  ref: 'Category'
}]
  tags: string[];
  status: 'draft' | 'published' | 'archived';
  publishedAt?: Date;
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
  readTime: number;
  views: number;
  createdAt: Date;
  updatedAt: Date;
}

// Change from extends Document to just the interface
export interface IBlogDocument extends IBlog, Document { }

const BlogSchema = new Schema<IBlogDocument>(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
      maxlength: [200, 'Title cannot exceed 200 characters'],
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    excerpt: {
      type: String,
      required: [true, 'Excerpt is required'],
      maxlength: [300, 'Excerpt cannot exceed 300 characters'],
    },
    content: {
      type: String,
      required: [true, 'Content is required'],
    },
    author: {
      id: { type: String, required: true },
      name: { type: String, required: true },
      email: { type: String, required: true },
      avatar: String,
    },
    featuredImage: {
      url: { type: String, required: true },
      publicId: { type: String, required: true },
      alt: { type: String, default: '' },
      width: { type: Number, required: true },
      height: { type: Number, required: true },
    },
    
    categories: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
    }],
    tags: [{ type: String }],
    status: {
      type: String,
      enum: ['draft', 'published', 'archived'],
      default: 'draft',
    },
    publishedAt: Date,
    seo: {
      metaTitle: {
        type: String,
        maxlength: 60,
      },
      metaDescription: {
        type: String,
        maxlength: 160,
      },
      keywords: {
        type: [String],
        default: [],
      },
    },
    readTime: {
      type: Number,
      default: 0,
    },
    views: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

// Index for better query performance
BlogSchema.index({ status: 1, publishedAt: -1 });
BlogSchema.index({ categories: 1 });
BlogSchema.index({ tags: 1 });

// Fix the export with proper typing
const Blog: Model<IBlogDocument> = mongoose.models.Blog || mongoose.model<IBlogDocument>('Blog', BlogSchema);

export default Blog;