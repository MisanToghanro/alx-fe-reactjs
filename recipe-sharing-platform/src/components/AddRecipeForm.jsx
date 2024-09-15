import { useState } from "react";

const AddRecipeForm =  () => {
const [form , setForm] = useState({
  title:"",
  ingredients:"",
  instructions:""
});
 

const handleInput = (e) => {
  setForm({
    ...setForm,
    [e.target.name]: e.target.value
  })
};

const handleSubmit = (e) => {
  e.preventDefault();
  console.log("recipe added", form);


  setForm({
    title:"",
  ingredients:"",
  instructions:""
  })
}




  return(
    <div className="container rounded-lg mx-auto p-4 shadow-2xl shadow-blue-500" >
    <h1 className="font-bold mb-4 text-2xl text-blue-500">You can add a recipe here</h1>
    
    <form onSubmit = {handleSubmit}className="  p-6">
      <input 
      type="text"
      name="title"
       placeholder="recipe title"
       value={form.title}
       onChange={handleInput}
       className="border p-2 mb-2 "
       required
       />

      <textarea 
      name="ingredients"
      value={form.ingredients}
      onChange={handleInput}
       placeholder="recipe ingredients" 
        className="border p-2 mb-2"
        required
       />

      <textarea 
            name="instructions"
            value={form.instrutions}
            onChange={handleInput}
       placeholder="cooking instructions"
        className="border p-2 mb-2"
        required
       />

<button type="submit" className="bg-blue-500 text-white rounded hover:bg-blue-600 py-2 px-2">add recipe</button>
    </form>
    </div>
  )
}
export default AddRecipeForm;