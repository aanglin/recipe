// import connectDB from "../../lib/mongodb";
// import Recipe from "../../model/recipeSchema"

// connectDB();

// export default async function CreateRecipe(req, res) {
//     try{
//         const recipe = await Recipe.create(req.body);
//         res.redirect('/homepage')
//         if(!recipe){
//             return res.json({"code": 'Recipe not saved'})
//         }
//     }catch(error){
//         res.status(400).json({status: 'Not able to create recipe'})
//     }
// }

    