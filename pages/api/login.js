import connect from "../../lib/mongodb";
import User from "../../model/userSchema";
// import Cookies from 'js-cookie';
// import { useRouter } from 'next/router';

connect();

export default async function Signup(req, res) {
    //  const router = useRouter();
    const {email, password} = req.body
    const user = await User.findOne({email , password});
    if (!user) {
        return res.json({status: "Not able to find user"})
    }
    else{
    // Cookies.set("loggedin", true);
    res.redirect("/homepage")
    // router.push("/homepage");
}
}
   
