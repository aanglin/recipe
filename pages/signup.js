import Background from "../public/images/background.jpg";
import Image from "next/image";


export default function Login() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block h-fit w-full">
        <Image
          priority="true"
          className="h-screen w-full object-cover"
          src={Background}
          alt="Food"
          height="2530vh"
          width="2500%"
        />
      </div>
      <div className="bg-gray-800 flex flex-col justify-center">
        <form className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg" action="/api/apisignup" method="post">
          <h2 className="text-4xl text-white font-bold text-center">SIGN UP</h2>
          <div className="flex flex-col text-gray-400 py-2">
            <label>Email</label>
            <input
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border--blue-500 focus:bg-gray-800 focus:outline-none"
              type="text" name="email"
            />
          </div>
          <div className="flex flex-col text-gray-400 py-2">
            <label>Password</label>
            <input
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border--blue-500 focus:bg-gray-800 focus:outline-none"
              type="password" name="password"
            />
          </div>
          <div className="flex flex-col text-gray-400 py-1 text-center">
          <button className="border rounded-xl bg-teal-500 w-full p-1 my-5 hover:bg-teal-400 text-white">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
}
