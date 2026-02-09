
import HeaderMenu from '../models/HeaderMenu';




// Get Header Data
export const getHeaderMenu = async () => {

  try {
    const headerMenu = await HeaderMenu.find({});
    return headerMenu;
  } catch (error) {
    console.error('Error fetching header content:', error.message);
    throw new Error('Unable to fetch header content');
  }
  
};

