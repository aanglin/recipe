import connect from "../../lib/mongodb";
import Recipe from "../../model/recipeSchema"

connect();

export default async function getRecipe(req, res) {
    const data = await Recipe.find({});
    res.json(data);
    
}