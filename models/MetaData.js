const mongoose = require('mongoose');

const metadataSchema = new mongoose.Schema({
    title: { type: String, required: true },

    description: { type: String },
    
    robots: { type: String },

    fetchOnSlug: {
        type: String,
        required: true,
        unique: true
    }


});

const Metadata = mongoose.models.Metadata || mongoose.model('Metadata', metadataSchema);
export default Metadata;



// twitter: {
//     card: { type: String },
//     title: { type: String },
//     description: { type: String },
//     site: { type: String },
//     creator: { type: String },
//     image: { type: String },
//     labels: {
//         label1: { type: String },
//         data1: { type: String },
//         label2: { type: String },
//         data2: { type: String },
//     },
// },

// og: {
//     locale: { type: String },
//     type: { type: String },
//     title: { type: String },
//     description: { type: String },
//     url: { type: String },
//     site_name: { type: String },
//     updated_time: { type: Date },
//     image: {
//         url: { type: String },
//         secure_url: { type: String },
//         width: { type: Number },
//         height: { type: Number },
//         alt: { type: String },
//         type: { type: String },
//     },
// },