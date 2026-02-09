const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  hasSubmenu: { type: Boolean, required: true, default: false },
});

const technologySchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true },
});

const hiringSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  description: { type: String, required: true },
});

const categoryContentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  description: { type: String, required: true },
  technologies: [technologySchema],
  hiring: [hiringSchema],
});

const hireDataSchema = new mongoose.Schema({
  categories: [technologySchema],
  content: { type: Map, of: categoryContentSchema },
});

const servicesDataSchema = new mongoose.Schema({
  categories: [technologySchema],
  content: { type: Map, of: categoryContentSchema },
});

const HeaderMenuSchema = new mongoose.Schema({
  menuItems: [menuItemSchema],
  hireData: hireDataSchema,
  servicesData: servicesDataSchema,
});

const HeaderMenu = mongoose.model('HeaderMenu', HeaderMenuSchema);
export default HeaderMenu;
