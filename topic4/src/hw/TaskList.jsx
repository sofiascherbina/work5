import { useState } from "react";
import css from "./taskList.module.css";
const tasksArr = [  
    {"id": 1,"text": "Повчити конспект"},
    {"id": 2,"text": "По розв'язувати параметри"},
    {"id": 3,"text": "Подивитись новий фільм"},
    {"id": 4,"text": "Повторити конспект з геометрії"},
    {"id": 5,"text": "Попрактикувати useState в дзшці"}
];
export default function TaskList(){
    const [tasks, setTask] = useState(tasksArr);
    const [value, setValue] = useState("");
    function addTask(){
        let newTask = {
            id:Date.now(),
            text:value,
        }
        setTask([...tasks, newTask]);
        setValue('');
    }
    return(
        <>
        <h1 className={css.title}>Task List</h1>
        <ul className={css.taskList}>{tasks.map( task =>(<li key={task.id}>
                    <p>{task.text}</p>
                    <button onClick={()=>{
                    let filteredTasks = tasks.filter(t => t.id !== task.id);
                        setTask(filteredTasks);
                    }} className={css.deleteBtn}>Delete task</button>
                </li>))}</ul>
                <div className={css.addingCont}>
                     <input type="text" value={value} onChange={txt => setValue(txt.target.value)} className={css.input} placeholder="Type ur task"/>
                    <button onClick={addTask} className={css.addBtn}>Add task</button>
                </div>
        </>
    )
}