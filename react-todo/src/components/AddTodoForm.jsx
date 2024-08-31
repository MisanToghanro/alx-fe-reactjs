import { useState } from "react";

const AddTodoForm =() => {

    const [inputValue , setInputValue] = useState("");
    const [todos, setTodos] = useState([]); // Add state for todos

    const addTodo = (text) => {
        setTodos([...todos, { id: Date.now(), text }]);
    };
    
const handleSubmit = (e) =>{
e.preventDefault()
if (inputValue.trim()) {
  addTodo(inputValue);
  setInputValue(''); // Clear input after adding
}
}



    return(

            <form onSubmit={handleSubmit}>
            <input
            type="text"
            vaule={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            />

            <button type="submit">Add Todo</button>
            </form>
     
    )
}
export default AddTodoForm