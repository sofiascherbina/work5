import { useRef } from "react";

export default function Focus(){
    const inputRef = useRef();
    const handleClick=()=>{
        inputRef.current.focus()
    }
    return(
        <>
        <input type="text" ref={inputRef}/>
        <button onClick={handleClick}>Focus</button>
        </>
    )
}