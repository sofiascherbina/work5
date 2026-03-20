import { useState } from "react";
export default function Counter(){
        const [count, setCount] = useState(0); 
        const Add = ()=>{
            return setCount(count + 1);
        }
        const Substruct = ()=>{
           return setCount(count-1);
        }
        
    return(
        <>
            <p>{count}</p>
            <button onClick={Add}>Add</button>
            <button onClick={Substruct}>Subctract</button>
        </>
    )
}