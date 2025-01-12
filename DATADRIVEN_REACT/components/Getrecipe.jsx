export default function GetRecipe({ingredientList ,getRecipefxn}) {
  console.log("this is in getRecipe compo",ingredientList.length>0)
  return (
    <>
    <h2 className="text-2xl font-semibold text-center text-black mt-10 mb-4">
    Ingredients On Hand : </h2>
    <div className="Getrecipe container w-full bg-gradient-to-br from-orange-100 to-orange-200">
      <div className="container p-6">
        <h1 className="text-4xl text-center text-orange-800 font-bold mb-10 ">
          Recipe Generator
        </h1>
        <div
          className="flex items-center justify-between mb-12 mx-auto max-w-4xl p-8 
                              bg-white rounded-2xl shadow-lg border border-orange-100 ">
          <div className="space-y-3">
            <h4
              className="text-2xl font-bold text-gray-800 
                                    hover:text-orange-600 transition-colors"
            >
              Ready for a Recipe?
            </h4>
            <small className="text-gray-600 text-lg block">
              Generate a recipe from your list of ingredients
            </small>
          </div>
          {ingredientList.length >0 && <button onClick={ getRecipefxn }
            className="rounded-md bg-red-500 hover:bg-orange-700
                                    hover:border-orange-700 transition-colors
                                    shadow-md p-2 text-white font-semibold"
          >
            Get Recipe
          </button>}
        </div>
      </div>
    </div>
    </>
  );
}
