import React from "react";
import Head from "next/head";


function Recipes({ data }) {
  console.log(data);
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Fuzzy+Bubbles&display=swap"
          rel="stylesheet"
        />
      </Head>
      {Array.from(data).map(function (r, _id) {
        return (
          <div className="flex flex-col justify-center  " key={_id}>
            <div className="flex  justify-center m-2 p-12 ">
              <div className="flex text-black max-w-[800px] w-full mx-auto bg-teal-500 p-8 px-8 rounded-lg">
                <ul>
                  <div>
                    <>
                      <div className=" m-4 text-[32px] font-bold">
                        <li className="text-center">{r.title}</li>
                      </div>
                      <li className="text-center text-[32px] font-bold m-1 p-1">
                        Ingredients
                      </li>
                      <li className="text-center m-1 p-1 text-[30px]  ">
                        {r.ingredients.split("|").join("\n")}
                      </li>
                      <li className="text-center m-1 p-1 text-[32px] ">
                        {r.servingSize} per person
                      </li>
                      <li className="text-center m-1 p-1 text-[32px] font-bold ">
                        How to Prepare
                      </li>
                      <li className="text-center m-1 p-1 text-[30px]  ">
                        {r.instructions}
                      </li>
                      {/* <button className=" border w-20 rounded-lg bg-teal-900 hover:bg-teal-700 text-white m-3">
                        UpDate
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

export default Recipes;
