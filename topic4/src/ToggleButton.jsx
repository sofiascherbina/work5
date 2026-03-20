import { useState } from "react";
export default function ToggleButton(){
    const [isOn,setIsOn] = useState(false);
   function toggle(){
        return setIsOn(!isOn);
    }
     return(
        <>
        <button type="toggle" onClick={toggle} style={{width:"100px", margin:"10px", backgroundColor : 
        isOn ? 'green' : 'red'
        }} className={ isOn ? 'toggleOn' : 'toggleOff'}>
            { isOn
            ? 'ON'
            : 'OFF'}
        </button>
        </>
     )
}