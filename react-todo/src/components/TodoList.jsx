import { useState } from "react"
import AddTodoForm from "./AddTodoForm";
const TodoList =() => {

    const [todos , setTodos] = useState([]);


const addTodo= (text) =>{
    const newTodo = {id:todos.length + 1 ,text ,completed:false};
    setTodos([...todos , newTodo]);
}
    const toggleTodo = (index) => {
       setTodos(
        todos.map((todo, i) => 
        i===index?{...todo, completed:!todo.completed} : todo)
       )
    }

    const deleteTodo = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
      };


    return(
        <div>
   <h1>Todo List</h1>
      <AddTodoForm addTodo={addTodo} />
      <ul>
        {todos.map((todo, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            <span
              onClick={() => toggleTodo(index)}
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                cursor: 'pointer',
                marginRight: '10px'
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
        </div>
    )
}

export default TodoList