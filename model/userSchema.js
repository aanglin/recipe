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
        allowNull: false,
        required: true,
        minlength: [5],
      },
      
})

 module.exports = mongoose.models.User || mongoose.model('User', userSchema);