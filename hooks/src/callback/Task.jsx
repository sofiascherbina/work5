import { useCallback, useState } from "react";
export default function Task(){
    const [count, setCount] = useState(0);
    const handleClick=useCallback(()=>{
        console.log('Button clicked');
    },[count])
    return(
        <>
        <p>{count}</p>
        <button onClick={handleClick}>Click</button>
        <button onClick={()=>setCount(count+1)}>+1</button>
        </>
    )
}