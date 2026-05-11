import { useState, useEffect } from "react";

// export default function Counter(){
//     const [count, setCount] = useState(0);
//     useEffect(()=>{
//         console.log(count);
//     },[count])
//     const increaseCounter=()=>{
//         setCount(count+1)
//     }
//     const decreaseCounter=()=>{
//         setCount(count-1)
//     }
//     return(
//         <>
//         <h1>{count}</h1>
//         <button onClick={increaseCounter}>+1</button>
//         <button onClick={decreaseCounter}>-1</button>
//         </>
//     )
// }

export default function Counter(){
    const [time, setTime] = useState(0);
    useEffect(()=>{
         const timer = setInterval(()=>{
        setTime(time=> time+1)
    },1000);
        return()=> clearInterval(timer)
    },[]);
    
    return(
        <>
            <p>{time}</p>
        </>
    )
}