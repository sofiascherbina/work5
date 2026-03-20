// export default function Event(){
//     function HandleClick(event){
//         console.log(event);
//         console.log('clicked');
//     }
//     return (
//         <>
//         <button onClick={HandleClick}>Click</button>
//         </>
//     )
// }

// export default function ButtonLogger(){
//     return(
//         <>
//         <button onClick={event=>{console.log("Button clicked");
//         }}>Click</button>
//         </>
//     )
// }

import React from "react";
class ButtonLogger extends React.Component {
    handleClick(event){
        console.log("Button clicked",event);
    }
    render(){
        return(
            <>
            <button onClick={this.handleClick}>Click</button>
            </>
        )
    }
}
export default ButtonLogger