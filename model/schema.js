import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
    type: String,
    required: true,
    unique: true,
    match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Please enter a valid email address!' ],
    trim: true,
    },
    password: {
        type: String,
        unique: true,
        required: true,
        minlength: 5,
      },
      
})

// const User =models.User || model('User', userSchema)

// export default User;

 module.exports = mongoose.models.User || mongoose.model('User', userSchema);