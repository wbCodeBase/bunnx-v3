
import mongoose from 'mongoose';


const activeSlugSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true }, // Slug value
  label: { type: String, required: true }, // Slug label
  templateName: { type: String }, // Slug label
  isActive: { type: Boolean, default: true }, // Whether the slug is active
}, {
  timestamps: true
});


// Ensure model registration
let ActiveSlug;
try {
  // Check if model is already registered
  ActiveSlug = mongoose.model('ActiveSlug');
} catch (error) {
  // Model not registered, register it
  ActiveSlug = mongoose.model('ActiveSlug', activeSlugSchema);
}

export default ActiveSlug;

// const ActiveSlug = mongoose.models.ActiveSlug || mongoose.model('ActiveSlug', activeSlugSchema);
// export default ActiveSlug; // Use ES6 export
