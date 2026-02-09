
import ActiveSlug from '../models/ActiveSlug';
import ContactForm from '../models/ContactForm.js';

// Get all users
export const getActiveSlug = async () => {

  try {
    const activeSlug = await ActiveSlug.find({});

    return activeSlug;

  } catch (error) {
    console.error('Error fetching header content:', error.message);
    throw new Error('Unable to fetch header content');
  }

};


// Get all users
export const getQueries = async () => { 

  try {
    const queryContent = await ContactForm.find({});
    return { success: true, data: queryContent }; // Return the updated template
  } catch (error) {
    console.error('Error in GET request:', error.message);
    return new Response(JSON.stringify({ error: error.message }));
  }

};





// Create active slug
export const createActiveSlug = async (data) => {

  try {

    const activeSlug = new ActiveSlug(data);

    await activeSlug.save();

    return { success: true, data: activeSlug }; // Return the updated template
  } catch (error) {
    console.error("Error saving active slug content:", error);
    throw new Error(error.message || "Failed to save the active slug content");
  }
};


export const deleteActiveSlug = async ({ id }) => {
  try {
    
    const activeSlug = await ActiveSlug.findByIdAndDelete(id);
    if (!activeSlug) {
      throw new Error("Slug not found");
    }
    
    return { success: true, data: activeSlug };
  } catch (error) {
    console.error("Error deleting component content:", error.message);
    throw new Error(error.message || "Failed to delete the component content");
  }
};



export const updateActiveSlug = async ({ id, slugData }) => {
  try {

    const activeSlug = await ActiveSlug.findByIdAndUpdate(
      id,
      slugData,
      { new: true, runValidators: true } // Enable schema validation
    );
    
    if (!activeSlug) {
      throw new Error("Slug not found");
    }
    return { success: true, data: activeSlug }; // Return the updated template
  } catch (error) {
    console.error("Error updating slug:", error.message);
    throw new Error(error.message || "Failed to update slug");
  }
};




// Create active slug
export const createContact = async (data) => {

  try {

    const contact = new ContactForm(data);

    await contact.save();

    return { success: true, data: contact }; // Return the updated template
    
  } catch (error) {
    console.error("Error saving active slug content:", error);
    throw new Error(error.message || "Failed to save the active slug content");
  }
};