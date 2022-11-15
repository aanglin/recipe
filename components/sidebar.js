import Link from "next/link";


export default function Sidebar(){
    return (
        <>
        <button id="dropdownMenuIconHorizontalButton" data-dropdown-toggle="dropdownDotsHorizontal" className="fixed inline-flex items-center p-2 text-sm font-medium text-center text-teal-500  rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-teal-500 focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-teal-900 dark:focus:ring-gray-600" type="button"> 
  <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
</button>

{/* <!-- Dropdown menu --> */}
<div id="dropdownDotsHorizontal" className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
    <ul className="py-1 text-sm text-teal-500 dark:text-gray-200" aria-labelledby="dropdownMenuIconHorizontalButton">
      <li>
        <Link href="/homepage">
        <a className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-teal-500">Homepage</a>
        </Link>
      </li>
      <li>
        <Link href="/favorites">
        <a className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-teal-500">Favorites</a>
        </Link>
      </li>
      <li>
        <Link href="/createRecipes">
        <a className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-teal-500">Create Recipes</a>
        </Link>
      </li>
    </ul>
    <div className="py-1">
        <Link href="/logout">
      <a className="block py-2 px-4 text-sm text-teal-500 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-teal-500">Log Out</a>
      </Link>
    </div>
</div>
</>
    )
    }
