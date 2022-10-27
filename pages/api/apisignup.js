import connect from "../../lib/mongodb";
import User from "../../model/userSchema";

connect();

export default async function Signup(req, res) {
    try{
        const user = await User.create(req.body);
        res.redirect('/')
        if(!user){
            return res.json({"code": 'User not created'})
        }
    }catch(error) {
        res.status(400).json({status: 'Not able to create user'})
    }
}
   