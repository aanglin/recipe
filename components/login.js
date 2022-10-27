import Image from "next/image";
import Second from "../public/images/second.jpg";
import Link from "next/link";
  import Cookies from 'js-cookie';
//   import { useRouter } from 'next/router';

export default function Login() {
  //  const router = useRouter();

  //  const logIn = (e) => {
  //    Cookies.set("loggedin", true);
  //  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block h-fit w-full">
        <Image
          priority="true"
          className="h-screen w-full object-cover"
          src={Second}
          alt="Food"
          height="2530vh"
          width="2500%"
        />
      </div>
      <div className="bg-gray-800 flex flex-col justify-center">
        <form 
        // onSubmit={(e) => logIn(e)}
        className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg" action="/api/login" method="post">
          <h2 className="text-4xl text-white font-bold text-center">SIGN IN</h2>
          <div className="flex flex-col text-gray-400 py-2">
            <label>Email</label>
            <input
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border--blue-500 focus:bg-gray-800 focus:outline-none"
              name="email"
              type="text"
            />
          </div>
          <div className="flex flex-col text-gray-400 py-2">
            <label>Password</label>
            <input
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border--blue-500 focus:bg-gray-800 focus:outline-none"
              name="password"
              type="password"
            />
          </div>
          <div className="flex flex-col text-gray-400 py-1 text-center">
          <button onClick={() => Cookies.set("loggedin", true)} className="border rounded-xl bg-teal-500 w-full p-1 my-5 hover:bg-teal-400 text-white">Log In</button>
          </div>
          <p className="text-center text-white font-bold">
            If you do not have an account please
          </p>
          <div className="text-center text-white font-bold m-2 ">
          <Link 
          className=""
          href="signup">
            <a >Signup</a>
          </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
