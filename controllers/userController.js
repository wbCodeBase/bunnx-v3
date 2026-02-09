
import User from '../models/User';
// import { hash } from "bcryptjs";

// Get all users
export const getUsers = async () => {

  try {
    const users = await User.find({});
    return { success: true, data: users }; // Return the updated template
  } catch (error) {
    console.error('Error in Users GET request:', error.message);
    return new Response(JSON.stringify({ error: error.message }));
  }

};


export async function getUserById(id) {
  try {
    // Validate the ID format if using MongoDB ObjectId
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return {
        success: false,
        error: 'Invalid user ID format',
      };
    }

    // Find the user by ID
    const user = await User.findById(id);

    if (!user) {
      return {
        success: false,
        error: 'User not found',
      };
    }

    return {
      success: true,
      data: user,
    };
  } catch (error) {
    console.error('Error fetching user by ID:', error.message);
    return {
      success: false,
      error: 'An error occurred while fetching the user-' + error.message,
    };
  }
}


// Create a new user
export const createUser = async (data) => {
  const { name, email, password } = data;

  if (!name || !email || !password) {
    return { status: 400, message: 'Please provide all fields' };
  }

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return { status: 409, message: 'User already exists' };
    }

    // const newUser = await User.create({ name, email, password });
    const newUser = new User({ name, email, password });

    const savedUser = await newUser.save();

    return { status: 201, success: true, data: savedUser, message: 'User created successfully' };
  } catch (error) {
    return { status: 500, message: 'Internal server error', error: error.message };
  }
};


// Update a user
export const updateUser = async (id, data) => {
  return await User.findByIdAndUpdate(id, data, { new: true });
};

// Delete a user
export const deleteUser = async (id) => {
  return await User.findByIdAndDelete(id);
};
