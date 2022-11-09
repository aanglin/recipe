// import  mongoose  from "mongoose";
// require('dotenv').config()


// const MONGODB_URI = process.env.MONGODB_URI

// if (!MONGODB_URI) {
//   throw new Error(
//     'Please define the MONGODB_URI environment variable inside .env.local'
//   )
// }

// /**
//  * Global is used here to maintain a cached connection across hot reloads
//  * in development. This prevents connections growing exponentially
//  * during API Route usage.
//  */
// let cached = global.mongoose

// if (!cached) {
//   cached = global.mongoose = { conn: null, promise: null }
// }

// async function connectDB() {
//   if (cached.conn) {
//     return cached.conn
//   }

//   if (!cached.promise) {
//     const opts = {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       bufferCommands: false,
//     //   bufferMaxEntries: 0,
//     //   useFindAndModify: false,
//     //   useCreateIndex: true,
//     }

//     cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
//       return mongoose
//     })
//   }
//   cached.conn = await cached.promise
//   return cached.conn
// }

// module.exports = connectDB;








// // const uri = process.env.NEXT_ATLAS_URI;
// // const options = {
// //     useUnifiedTopology: true,
// //     useNewUrlParser: true,
// // };

// // let mongoClient = null;
// // let database = null;

// // if (!process.env.NEXT_ATLAS_URI) {
// //     throw new Error('Please add your Mongo URI to .env.local')
// // }

// // export async function connectToDatabase() {
// //     try {
// //         if (mongoClient && database) {
// //             return { mongoClient, database };
// //         }
// //         if (process.env.NODE_ENV === "development") {
// //             if (!global._mongoClient) {
// //                 mongoClient = await (new MongoClient(uri, options)).connect();
// //                 global._mongoClient = mongoClient;
// //             } else {
// //                 mongoClient = global._mongoClient;
// //             }
// //         } else {
// //             mongoClient = await (new MongoClient(uri, options)).connect();
// //         }
// //         database = await mongoClient.db(process.env.NEXT_ATLAS_DATABASE);
// //         return { mongoClient, database };
// //     } catch (e) {
// //         console.error(e);
// //     }
// // }





















// // async function connectDB() {
// //   // use mongoose to connect this app to our database on mongoDB using the DB_URL (connection string)
// //  await mongoose
// //     .connect(
// //         process.env.MONGODB_URI,
// //       {
// //         //   these are options to ensure that the connection is done properly
// //         useNewUrlParser: true,
// //         useUnifiedTopology: true,
// //       }
// //     )
// //     .then(() => {
// //       console.log("Successfully connected to MongoDB Atlas!");
// //     })
// //     .catch((error) => {
// //       console.log("Unable to connect to MongoDB Atlas!");
// //       console.error(error);
// //     });
// // }