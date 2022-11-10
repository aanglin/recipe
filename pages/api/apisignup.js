import clientPromise from "../../lib/connect";
import bcrypt from "bcrypt";



export default async function Signup(req, res) {
  const client = await clientPromise;
   const db = client.db("myFirstDatabase");
  const {email, password} = req.body;
  const hash = await bcrypt.hash(password, 10)
  await db.collection('users').insertOne({
    email,
    password: hash
  });
  res.redirect(302 , '/')
   

  
}