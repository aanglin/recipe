import  mongoose  from "mongoose";


async function connectDB() {
    // Use new db connection
    mongoose.connect(process.env.MONGODB_URI, () => {
        console.log("you are connected");
    });
   
  };
  
  export default connectDB;