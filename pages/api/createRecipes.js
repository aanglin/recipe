// import connectDB from "../../lib/mongodb";
// import Recipe from "../../model/recipeSchema"
import clientPromise from "../../lib/connect";
// connectDB();

export default async function CreateRecipe(req, res) {
    try{
        const client = await clientPromise;
  const db = client.db("myFirstDatabase");
  let myItem = req.body;
  let myRecipe = await db.collection("recipes").insertOne(myItem);
        res.redirect('/homepage')
        if(!myRecipe){
            return res.json({"code": 'Recipe not saved'})
        }
    }catch(error){
        res.status(400).json({status: 'Not able to create recipe'})
    }
}

    