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

// export default function Counter(){
//     const [time, setTime] = useState(0);
//     useEffect(()=>{
//          const timer = setInterval(()=>{
//         setTime(time=> time+1)
//     },1000);
//         return()=> clearInterval(timer)
//     },[]);
    
//     return(
//         <>
//             <p>{time}</p>
//         </>
//     )
// }

// import {useToggle} from './Customs.js';
// import Modal from "./Modal.jsx";

// export default function Toggle(){
//     const{ isOpen, open, close} = useToggle();
//     return(
//         <>
//         <button onClick={open}>Open</button>
//         {isOpen && <Modal onClose={close} isOpen={isOpen}/>}
//         </>
//     )
// }

import {useLocalStorage} from './Customs.js';
export default function TaskList(){
    const [items,setItems] = useLocalStorage();
    const [task, setTask]=useState('')

    const handleChange=(evt)=>{
        setTask(evt.target.value)
    }
    const addTask =()=>{
        let newTask ={
            id:Date.now(),
            task:task
        }
        setItems(prev=>[...prev,newTask])
        setTask("")
    }
    return(
        <>
            <ul>
                {items.map(item =>(
                    <li key={item.id}>
                        <p>{item.task}</p>
                    </li>
                ))}
            </ul>
            <input type="text" name="task" value={task} onChange={handleChange}/>
            <button onClick={addTask}>Add Task</button>
        </>
    )
}