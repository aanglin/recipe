import clientPromise from "../../lib/connect";
import { useRouter } from "next/router";

export default async function CreateRecipe(req, res) {
  const client = await clientPromise;
  const db = client.db("myFirstDatabase");
  const router = useRouter();
  try {
    let myItem = req.body;
    let myRecipe = await db.collection("recipes").insertOne(myItem);
    router.push('/homepage').then(() => router.reload())
    if (!myRecipe) {
      return res.json({ code: "Recipe not saved" });
    }
  } catch (error) {
    res.status(400).json({ status: "Not able to create recipe" });
  }
}
