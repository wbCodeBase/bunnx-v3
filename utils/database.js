import mongoose from 'mongoose';


async function connectToDatabase() {
  try {
    const MONGODB_URI = process?.env?.MONGODB_URI;

    if (!MONGODB_URI) {
      throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
    }
    
    // Check if already connected
    if (mongoose.connection.readyState >= 1) {
      console.log('Using existing database connection');
      return mongoose.connection;
    }

    // Establish a new connection
    const connection = await mongoose.connect(MONGODB_URI);
    console.log('New database connection established');
    return connection;
  } catch (error) {
    console.error('Database connection failed:', error.message);
    throw new Error(error.message);
  }
}

export default connectToDatabase;




// import mongoose from 'mongoose';

// const MONGODB_URI = process.env.MONGODB_URI;

// if (!MONGODB_URI) {
//   throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
// }

// let cached = global.mongoose;

// if (!cached) {
//   cached = global.mongoose = { conn: null, promise: null };
// }

// async function connectToDatabase() {
//   if (cached.conn) return cached.conn;

//   if (!cached.promise) {
//     cached.promise = mongoose.connect(MONGODB_URI)
//       .then((mongoose) => mongoose)
//       .catch((err) => {
//         console.error('Database connection failed:', err.message);
//         throw new Error(err.message);
//       });
//   }
//   cached.conn = await cached.promise;
//   return cached.conn;
// }


// export default connectToDatabase;
