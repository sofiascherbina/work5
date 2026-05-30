import { useRef } from "react";

export default function Counter(){
    const counterRef = useRef(0);
    const handleClick=()=>{
        counterRef.current+=1
        console.log(counterRef.current);
    }
    return(
        <>
        <button onClick={handleClick} style={{width:200, marginTop:20}}>+1</button>
        </>
    )
}