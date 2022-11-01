import connectDB from "../../lib/mongodb";
import Recipe from "../../model/recipeSchema"

connectDB();

export default async function getRecipe(req, res) {
    const data = await Recipe.find({});
    res.json(data);
    
}