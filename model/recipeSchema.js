import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
    Title: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    },
    Serving,Size: {
        type: String,
        required: true,
      },
      Ingredients: {
        type: String,
        required: true,
        trim: true,
      },
      Instructions: {
        type: String,
        required: true,
        trim: true,
      }
      
})

 module.exports = mongoose.models.Recipe || mongoose.model('Recipe', recipeSchema);