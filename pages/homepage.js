import axios from "axios";
import { useState } from "react";
import { ImSearch } from "react-icons/im";

function Homepage() {
  const [query, setQuery] = useState("");
  const [title, setTitle] = useState("");
  const [ingredients, setIngredient] = useState("");
  const [servings, setServing] = useState("");
  const [instructions, setInstructions] = useState("");

  const options = {
    method: "GET",
    url: `https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe?query=${query}`,
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY,
      "X-RapidAPI-Host": "recipe-by-api-ninjas.p.rapidapi.com",
    },
  };

  const getRecipe = (e) => {
    e.preventDefault();
    axios
      .request(options)
      .then(function (response) {
        setTitle(response.data[0].title);
        setIngredient(response.data[0].ingredients);
        setServing(response.data[0].servings);
        setInstructions(response.data[0].instructions);
        setQuery('')
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  return (
    <>
      <div className="relative flex items-center max-w-[500px] w-full m-auto pt-4 text-white z-10 ">
        <form
          onSubmit={getRecipe}
          className="flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-400 text-black  rounded-2xl"
        >
            <div>
          <input
          onChange={(e) => setQuery(e.target.value)}
          className="bg-transparent border-none text-black focus:outline-none text-2xl placeholder:text-black/10"
          type='text'
          placeholder='Search for a recipe'
          value={query}
          />
          </div>
      <button onClick={getRecipe}>
        <ImSearch />
      </button>
        </form>
      </div>

    <div className="flex flex-col justify-center m-8">
      <div className="font-white text-white max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg">
        <ul className="font-black">
            <li>{title}</li>
            <li>{ingredients}</li>
            <li>{servings}</li>
            <li>{instructions}</li>
        </ul>
      </div>

      </div>
    </>
  );
}


export default Homepage;
