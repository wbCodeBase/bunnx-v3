import Metadata from '../models/MetaData';



// CREATE Metadata
export async function createMetadata(data) {
    try {
        const metadata = new Metadata(data);
        const savedMetadata = await metadata.save();

        return { success: true, data: savedMetadata };
    } catch (error) {
        console.error("Error creating metadata:", error.message);
        return { success: false, error: error.message };
    }
}

// READ all Metadata
export async function getMetadata() {
    try {
        const metadata = await Metadata.find({});

        if (!metadata) {
            return { success: false, error: "Metadata not found" };
        }

        return { success: true, data: metadata };
    } catch (error) {
        console.error("Error fetching metadata:", error.message);
        return { success: false, error: error.message };
    }
}

// READ Metadata by slug
export async function getMetadataByslug(slug) {
    try {
        const metadata = await Metadata.findOne({ fetchOnSlug: slug });

        if (!metadata) {
            return { success: false, error: "Metadata not found" };
        }

        return { success: true, data: metadata };
    } catch (error) {
        console.error("Error fetching metadata:", error.message);
        return { success: false, error: error.message };
    }
}

// UPDATE Metadata by slug
export async function updateMetadata(id, updatedMetadata) {
    try {
        const metadata = await Metadata.findByIdAndUpdate(
            id,
            updatedMetadata,
            { new: true, runValidators: true }
        );

        if (!metadata) {
            return { success: false, error: "Metadata not found" };
        }

        return { success: true, data: metadata };
    } catch (error) {
        console.error("Error updating metadata:", error.message);
        return { success: false, error: error.message };
    }
}

// DELETE Metadata by slug
export async function deleteMetadata(id) {
    
    
    try {
        const metadata = await Metadata.findByIdAndDelete(id)

        if (!metadata) {
            return { success: false, error: "Metadata not found" };
        }

        return { success: true };
    } catch (error) {
        console.error("Error deleting metadata:", error.message);
        return { success: false, error: error.message };
    }
}

