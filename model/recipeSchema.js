import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
    title: {
      type: String,
      trim: true,
    },
    servingSize: {
        type: String,
        trim: true,
        // required: true,
      },
      ingredients: {
        type: String,
        // required: true,
        trim: true,
      },
      instructions: {
        type: String,
        // required: true,
        trim: true,
      }
      
})

 module.exports = mongoose.models.Recipe || mongoose.model('Recipe', recipeSchema);