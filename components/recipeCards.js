import React from "react";
import Head from "next/head";
// import Link from "next/link";

function RecipeCards({ data }) {
  console.log(data);
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        
      </Head>
      {Array.from(data).map(function (r, i) {
        return (
          <div className="flex flex-col justify-center" key={i}>
            <div className="flex  justify-center m-8 p-12 ">
              <div className="flex text-black  w-fit mx-auto bg-teal-500 p-8 px-8 rounded-lg">
                <ul>
                  <div>
                    <>
                      <div className=" m-4 text-[38px] font-bold">
                        <li className="text-center">{r.title}</li>
                      </div>
                      <li className="text-center text-[38px] font-bold m-1 p-1">
                        Ingredients
                      </li>
                      <li>{r.ingredients.split("|").join("\n")}</li>
                      <li className="text-center m-1 p-1 text-[38px] font-bold">
                        {r.servings} per person
                      </li>
                      <li className="text-center m-1 p-1 text-[38px] font-bold">
                        How to Prepare
                      </li>
                      <li>{r.instructions}</li>
                      {/* <button className=" border w-20 rounded-lg bg-teal-800 text-white m-3">
                        SAVE
                      </button> */}
                    </>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default RecipeCards;
// <div className="flex flex-col justify-center m-8">
// <div className=" text-white max-w-[500px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg">
// </div>
//   <ul>
//       <div
//       className="flex p-2 m-2 text-2xl whitespace-nowrap "
//       >{data[0].title}</div>
//       <li className="text-center text-xl m-1 p-1">Ingredients</li>
//       <li className="flex flex-col ">{data[0].ingredients}</li>
//       <li className="text-center m-1 p-1">{data[0].servings} per person</li>
//       <li className="text-center m-1 p-1">How to Prepare</li>
//       <li>{data[0].instructions}</li>
//   </ul>

// </div>
