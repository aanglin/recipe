import axios from "axios";
import { useState } from "react";
import { ImSearch } from "react-icons/im";
import RecipeCards from "../components/recipeCards";
import Head from "next/head";

function Homepage() {
  const [query, setQuery] = useState("");
  const [recipe, setRecipe] = useState("");
  // const [title, setTitle] = useState("");
  // const [ingredients, setIngredient] = useState("");
  // const [servings, setServing] = useState("");
  // const [instructions, setInstructions] = useState("");

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
        setRecipe(response.data);
        // setTitle(response.data[0].title);
        // setIngredient(response.data[0].ingredients);
        // setServing(response.data[0].servings);
        // setInstructions(response.data[0].instructions);
        setQuery("");
        // console.log(response.data);
        // console.log(recipe)
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  return (
    <>
      <Head>
        <title>Recipes</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <h1 className=" bg-gray-800 text-center text-teal-500 font-bold text-4xl p-5">
        Aaron's Recipe Book
      </h1>
      <div className="bg-gray-800  h-[277rem] p-4 justify-center">
        <div className="relative flex items-center max-w-[500px] w-full m-auto pt-4 text-white z-10 ">
          <form
            onSubmit={getRecipe}
            className="flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-400 text-white  rounded-2xl"
          >
            <div>
              <input
                onChange={(e) => setQuery(e.target.value)}
                className="bg-transparent border-none text-white focus:outline-none text-2xl placeholder:text-white/15"
                type="text"
                placeholder="Search for a recipe"
                value={query}
              />
            </div>
            <button onClick={getRecipe}>
              <ImSearch />
            </button>
          </form>
        </div>
        {Array.from(recipe).map(function () {
          return (
            <div className="flex flex-row">
              <RecipeCards data={recipe} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Homepage;
