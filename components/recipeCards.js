

function RecipeCards({data}) {
    console.log(data)
    return (
    <div className="flex flex-col justify-center m-8">
      <div className="font-white text-white max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg">
        <ul className="font-black">
            <li>{data.title}</li>
            <li>{data.ingredients}</li>
            <li>{data.servings}</li>
            <li>{data.instructions}</li>
        </ul>
      </div>

      </div>
  )
}

export default RecipeCards