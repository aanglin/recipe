// import connectDB from "../../lib/mongodb";
import clientPromise from "../../lib/connect";
// import Recipe from "../../model/recipeSchema"

export default async function getRecipe(req, res) {
  const client = await clientPromise;
  const db = client.db("myFirstDatabase");
  switch (req.method) {
    case "POST":
      let myItem = req.body;
      let myRecipe = await db.collection("recipes").insertOne(myItem);
      res.redirect('/homepage')
      res.json(myRecipe);
      break;
    case "GET":
      const recipe = await db.collection("recipes").find({}).toArray();
      res.json(recipe);
      break;
  }
}
