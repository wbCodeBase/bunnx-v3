import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local')
}

interface MongooseCache {
  conn: typeof mongoose | null
  promise: Promise<typeof mongoose> | null
}

// 👇 use globalThis instead of global
const globalForMongoose = globalThis as unknown as {
  mongoose?: MongooseCache
}

const cached: MongooseCache = globalForMongoose.mongoose ?? {
  conn: null,
  promise: null,
}

if (!globalForMongoose.mongoose) {
  globalForMongoose.mongoose = cached
}

async function connectToDatabase(): Promise<typeof mongoose> {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, { bufferCommands: false })
      .then((mongoose) => {
        console.log('✅ MongoDB connected')
        return mongoose
      })
  }

  cached.conn = await cached.promise
  return cached.conn
}

export default connectToDatabase;







// import mongoose from 'mongoose';

// const MONGODB_URI = process.env.MONGODB_URI;

// if (!MONGODB_URI) {
//   throw new Error(
//     'Please define the MONGODB_URI environment variable inside .env.local'
//   );
// }

// interface MongooseCache {
//   conn: typeof mongoose | null;
//   promise: Promise<typeof mongoose> | null;
// }

// // Global variable to cache the database connection
// declare global {
//   var mongoose: MongooseCache | undefined;
// }

// const cached: MongooseCache = global.mongoose || {
//   conn: null,
//   promise: null,
// };

// if (!global.mongoose) {
//   global.mongoose = cached;
// }

// async function connectToDatabase(): Promise<typeof mongoose> {
//   if (cached.conn) {
//     return cached.conn;
//   }

//   if (!cached.promise) {
//     const opts = {
//       bufferCommands: false,
//     };

//     cached.promise = mongoose.connect(MONGODB_URI!, opts).then((mongoose) => {
//       console.log('✅ MongoDB connected successfully');
//       return mongoose;
//     });
//   }

//   try {
//     cached.conn = await cached.promise;
//   } catch (e) {
//     cached.promise = null;
//     console.error('❌ MongoDB connection error:', e);
//     throw e;
//   }

//   return cached.conn;
// }

// export default connectToDatabase;