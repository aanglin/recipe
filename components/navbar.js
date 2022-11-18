import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
// import { BsFillPersonLinesFill } from "react-icons/bs";
import { useRouter } from "next/router";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('gray-800');
  const [linkColor, setLinkColor] = useState("gray-800");
  const router = useRouter();

  useEffect(() => {
    if (
      router.asPath === "/recipe" ||
      router.asPath === "/factorfiction" ||
      router.asPath === "/notes" ||
      router.asPath === "/weather" ||
      router.asPath === "/techBlog"
    ) {
      setNavBg("transparent");
      setLinkColor("gray-800");
    } else {
      setNavBg("gray-800");
      setLinkColor("gray-800");
    }
  }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);
  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16 ">
        <Link href="/homepage">
          <h1 className="italic text-teal-500 cursor-pointer">Foodies</h1>
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex text-teal-500">
            <Link href="/homepage">
              <li className="ml-10 text-sm uppercase hover:border-b cursor-pointer">Homepage</li>
            </Link>
            <Link href="/favorites">
              <li className="ml-10 text-sm uppercase hover:border-b cursor-pointer">Favorites</li>
            </Link>
            <Link href="/createRecipes">
              <li className="ml-10 text-sm uppercase hover:border-b cursor-pointer">Create Recipes</li>
            </Link>
            <Link href="/logout">
              <li className="ml-10 text-sm uppercase hover:border-b cursor-pointer">
                Log Out
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/90" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500 "
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500 "
          }
        >
          <div>
            <div className="flex w-full items-center">
              <Link href="/">
                <h1 className="italic text-[#5651e5]">Foodies</h1>
              </Link>
              <div
                onClick={handleNav}
                className=" rounded-full shadow-lg shadow-gray-400 p-3 ml-28 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
           
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/homepage">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Homepage
                </li>
              </Link>
              <Link href="/favorites">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Favorites
                </li>
              </Link>
              <Link href="/createRecipes">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Create Recipes
                </li>
              </Link>
              <Link href="/logout">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Log Out
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
