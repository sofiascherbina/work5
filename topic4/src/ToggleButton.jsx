import { useState } from "react";
// export default function ToggleButton(){
//     const [isOn,setIsOn] = useState(false);
//    function toggle(){
//         return setIsOn(!isOn);
//     }
//      return(
//         <>
//         <button type="toggle" onClick={toggle} style={{width:"100px", margin:"10px", backgroundColor : 
//         isOn ? 'green' : 'red'
//         }} className={ isOn ? 'toggleOn' : 'toggleOff'}>
//             { isOn
//             ? 'ON'
//             : 'OFF'}
//         </button>
//         </>
//      )
// }

// export default function ToggleButton(){
//   const [isVisible, setIsVisible] = useState(false);
//     function switching(){
//            setIsVisible(!isVisible) ;
//     }
//   return(
//     <>
//     <button  onClick={switching} style={{margin:'20px auto', width:"200px", backgroundColor: isVisible ? "#947394" : "#6c9d7a"}}>
//         {
//             isVisible ? 'Hide' : 'Show'
//         }
//     </button>
//     <p onClick={switching} style={{display: isVisible ? "block" : "none"}}> testing</p>
//     </>
//   )
// }

export default function ToggleButton(){
    const[colour, setColour] = useState('inherit');
    function getRandomColour() {
        return "#" + Math.floor(Math.random() * 16777215).toString(16);
    }
    function changeColour(){
        setColour(getRandomColour());
    }
    return(
        <>
        <button onClick={changeColour} style={{margin:'20px auto', width:"200px", backgroundColor:colour}}>Click</button>
        </>
    )
}