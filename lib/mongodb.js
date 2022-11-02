import  mongoose  from "mongoose";
require('dotenv').config()

async function connectDB() {
  // use mongoose to connect this app to our database on mongoDB using the DB_URL (connection string)
 await mongoose
    .connect(
        process.env.MONGODB_URI,
      {
        //   these are options to ensure that the connection is done properly
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log("Successfully connected to MongoDB Atlas!");
    })
    .catch((error) => {
      console.log("Unable to connect to MongoDB Atlas!");
      console.error(error);
    });
}

module.exports = connectDB;
