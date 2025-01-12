import Header from "./components/myHeader"
// import form from "./components/form" // form❌ should be Form✅
import Form from "./components/userForm"
import Ingredients from "./components/ingredients";
import GetRecipe from "./components/Getrecipe"
import { useState, useRef, useEffect } from "react";
import { getRecipeFromT5 , getRecipeFromMistral , RecipeImg } from "./ai" 
import  HuggingfaceRecipe  from "./components/Huggingface"

console.log(RecipeImg);

export default function App(){
  const [ingredients, setIngredients] = useState([
    "salt",
    "sugar",
    "pepper",
    "chilli",
    "ginger",
  ]);
  const [response, setResponse] = useState("")
  const[recipeImg ,setRecipeImg] = useState("")
  
  function handleSubmit(e){
    console.log(" handlesubmit is click")
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newIngredient = formData.get("inputIngredient");//input box ka name attribute se value get kiya

    if (newIngredient) {
      setIngredients([...ingredients, newIngredient]);
      console.log(ingredients);
      e.target.reset(); // Clear the form
    }
  }
  // auto scroll 
  const recipeSection = useRef(null)
  useEffect(()=>{
    if(response !== "" && recipeSection !== null){
      recipeSection.current.scrollIntoView({ behavior :"smooth" })
    }
  },[response])



  async function getRecipe() {
    try {
        const apiResponse = await getRecipeFromT5(ingredients);
        console.log("t5 bali recipe :",apiResponse); // Log the full response for debugging

        if (apiResponse && apiResponse.length > 0) {
            // Access generated_text safely
            const recipeText = apiResponse[0].generated_text;
            console.log("this is recipe text :",recipeText); // Log the generated recipe text
            const mistralRecipe = await getRecipeFromMistral([recipeText]);
            console.log("the mistral neo recipe:",mistralRecipe)
            
            setResponse(mistralRecipe); // Store the recipe text in state

            const imgUrl = await RecipeImg({ inputs : recipeText });
            console.log(imgUrl);
            setRecipeImg(imgUrl)



        } else {
            console.error("No valid recipe generated.");
            setResponse("No recipe generated."); // Handle case where no recipe is returned
        }
    } catch (err) {
        console.log("Error fetching recipe:",err);
        setResponse("An error occurred while fetching the recipe."); // User-friendly error message
    }
}


  // function toggle() {
    
  // }



    return(
      <>
      <Header />
      <Form handleSubmit={handleSubmit}/>
      <Ingredients ingredientList={ingredients} />
      <GetRecipe 
      ingredientList={ingredients}
      getRecipefxn={getRecipe}
      // togglefxn={toggle}
      />
      <HuggingfaceRecipe 
      Recipe={response}
      Ref = {recipeSection}
      />
      {recipeImg && <img className="mx-auto rounded-3xl my-5" style={{ width: '450px', height: 'auto' }} src={recipeImg} alt="generated" />}
      </> 
    )
}

