import { useState} from "react"


function Counter() {

    const[count , setCount] = useState(0);
    
const increase = () => {
    setCount(count + 1);
}

const reset = () => {
    setCount(0);
}

const decrease = () => {
    setCount(count - 1);
}


    return(
        <div>
            <p>{count}</p>
            <button onClick={increase}>increment</button>
            <button onClick={reset}>reset</button>
            <button onClick={decrease}>decrement</button>
        </div>
    );
}
export default Counter