import connect from "../../lib/mongodb";
import Recipe from "../../model/recipeSchema"

connect();

export default async function CreateRecipe(req, res) {
    const {Title, servingSize, Ingredients, Instructions } = req.body
    const recipe = await Recipe.create({Title, servingSize, Ingredients, Instructions});
    if (!recipe) {
        return res.json({status: "Not able to save recipe"})
    }
    else{
    // res.json({status: "success", recipe})
    res.redirect("/homepage")
    
}
    
}