

function RecipeCards({data}) {
    console.log(data)
    return (
      <>
      <div  key={idx} className="flex p-4 m-4 text-2xl  whitespace-nowrap ">
        <li className="text-center">{data.title}</li>
      </div>
      <li  className="text-center text-xl m-1 p-1">
        Ingredients
      </li>
      <li key={idx} className="flex flex-col ">{ingredients}</li>
      <li key={idx} className="text-center m-1 p-1">
        {servings} per person
      </li>
      <li key={idx} className="text-center m-1 p-1">How to Prepare</li>
      <li>{instructions}</li>
    </>
      )
    }
    
    export default RecipeCards
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