const mongoose = require('mongoose');
const Schema = mongoose.Schema

// Define the HeroSection schema
const HeroSectionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
    },
    ctaText: {
        type: String,
        required: true
    },
    ctaRedirectUrl: {
        type: String,
        required: true
    },
    fetchOnSlug: {
        type: Schema.Types.ObjectId,
        ref: 'ActiveSlug',
        required: true,
        unique: true
    }
}, {
    timestamps: true
});

// Define the Services schema
const ServiceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    ctaRedirectUrl: {
        type: Schema.Types.ObjectId,
        ref: 'ActiveSlug',
    },
    fetchOnSlug: [{
        type: Schema.Types.ObjectId,
        ref: 'ActiveSlug',
        required: true
    }]


}, {
    timestamps: true
});

const CallToActionSchema = new mongoose.Schema({

    tagline: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    ctaHref: {
        type: String,
        required: true
    },
    ctaText: {
        type: String,
        required: true
    },
    ctaType: {
        type: String,
        required: true
    },

    imageUrl: { type: String },

    fetchOnSlug: {
        type: Schema.Types.ObjectId,
        ref: 'ActiveSlug',
    }

}, {
    timestamps: true
});

// Define the Template schema, including heroSection and servicesSection as arrays of sub-documents
const TemplateSchema = new mongoose.Schema({
    heroSection: {
        type: [HeroSectionSchema],
        required: false // heroSection is optional at the top level
    },
    servicesSection: {
        type: [ServiceSchema],
        required: false // servicesSection is also optional if needed
    },
    callToAction: {
        type: [CallToActionSchema],
        required: false // servicesSection is also optional if needed
    },
    templateName: {
        type: String,
        required: true,
        unique: true,
    },
}, {
    timestamps: true
});

const Template = mongoose.models.Template || mongoose.model('Template', TemplateSchema);
export default Template;