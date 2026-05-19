import { useState, useEffect } from "react";

// export default function LikeButton(){
//     const [likes, setLikes] = useState(()=>{
//         const saved = localStorage.getItem('likes')
//         return saved ? JSON.parse(Number(saved)) : 0; 
//     });
//     useEffect(()=>{
//         localStorage.setItem('likes',likes);
//     }, [likes])
//     const addLike=()=>{
//         setLikes(likes+1)
//     }
//     return(
//         <div>
//             <h2>Likes: {likes}</h2>
//             <button onClick={addLike}>Like ❤️</button>
//         </div>
//     )
// }

// export default function TaskList(){
//     const [tasks, setTasks] = useState({
//         todos: [],
//         text: "",
//     });
//     const handleChange=(evt)=>{
//         setTasks(prev=>({
//            ...prev,
//            text:evt.target.value
//         }))
//     }
//     const addTodo=()=>{
//         if (!tasks.text.trim()) return;

//         setTasks(prev=>({
//             todos:[...prev.todos, tasks.text],
//             text:""
//         }))
//     }
//     const deleteTodo=(index)=>{
//         const newTodos = [...tasks.todos];
//         newTodos.splice(index, 1);
//         setTasks(prev=>({
//             ...prev,
//             todos: newTodos
//         }))
//     }
//     return(
//         <div>
//             <input type="text" value={tasks.text} onChange={handleChange} />
//             <button onClick={addTodo}>Add</button>

//             <ul>
//               {tasks.todos.map((todo, i) => (
//                 <li key={i} style={{width:300, display:"flex", gap:30, margin:30}}>
//                   <p>{todo}</p>
//                   <button onClick={()=>deleteTodo(i)}>❌</button>
//                 </li>
//               ))}
//             </ul>
//       </div>
//     )
// }

export default function KeyTracker(){
    const [key, setKey] = useState("");

    const handleKey=(evt)=>{
        setKey(evt.key)
    }
    useEffect(()=>{
         window.addEventListener("keydown",handleKey);
        return () => {
            window.removeEventListener("keydown", handleKey);
        };
    },[])
    
    return (
        <>
            <h2>Pressed: {key}</h2>
        </>
    )
} 