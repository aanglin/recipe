import Image from "next/image"
import Finish from "../public/images/finished.jpg"
import Link from "next/link"

function logout() {
    
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block h-fit w-full">
        <Image
          priority="true"
          className="h-screen w-full object-cover"
          src={Finish}
          alt="Food"
          height="2530vh"
          width="2500%"
        />
      </div>
      <div className="bg-gray-800 flex flex-col justify-center">
        <form 
        // onSubmit={(e) => logIn(e)}
        className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg">
         <h1 className="text-center text-teal-500 text-3xl p-2">Go and Enjoy your meal!!!!!</h1>
          <div className="flex flex-col text-white py-1 text-center border bg-teal-500 hover:bg-teal-400 rounded-2xl">
          <Link 
          className=""
          href="/">
            <a >Log Out</a>
          </Link>
          </div>
          
        </form>
      </div>
    </div>
  )
}

export default logout
