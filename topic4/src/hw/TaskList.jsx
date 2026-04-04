import { useState } from "react";
import css from "./taskList.module.css";
const tasksArr = [  
    {"id": 1,"text": "Повчити конспект", done:false},
    {"id": 2,"text": "По розв'язувати параметри",done:false},
    {"id": 3,"text": "Подивитись новий фільм",done:false},
    {"id": 4,"text": "Повторити конспект з геометрії",done:false},
    {"id": 5,"text": "Попрактикувати useState в дзшці",done:false}
];
const DeleteIc=()=>{
    return(
        <>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 6H21" stroke="white" stroke-width="2" stroke-linecap="round"/>
            <path d="M8 6V4H16V6" stroke="white" stroke-width="2" stroke-linecap="round"/>
            <path d="M19 6L18 20H6L5 6" stroke="white" stroke-width="2" stroke-linecap="round"/>
            <path d="M10 11V17" stroke="white" stroke-width="2" stroke-linecap="round"/>
            <path d="M14 11V17" stroke="white" stroke-width="2" stroke-linecap="round"/>
        </svg>
        </>
    )
}
export default function TaskList(){
    const [tasks, setTask] = useState(()=>{
        let checkedArr = localStorage.getItem("tasks");
        return checkedArr ? JSON.parse(checkedArr) : tasksArr;
    });
    const [value, setValue] = useState("");
    function addTask(){
        let newTask = {
            id:Date.now(),
            text:value,
            done:false
        }
        const newArr = [...tasks, newTask];
        setTask(newArr);
        localStorage.setItem("tasks", JSON.stringify(newArr))
        setValue('');
    }
    const changeStatus =(id)=>{
    let completedTaks = tasks.map(task=>{
        if(task.id === id){
            return{ ...task, done:!task.done}
        }
        return task
      })
      setTask(completedTaks);
      localStorage.setItem('tasks', JSON.stringify(completedTaks));
    }
    return(
        <>
        <h1 className={css.title}>Task List</h1>
        <ul className={css.taskList}>{tasks.map( task =>(<li key={task.id}>
                    <input type="checkbox" checked={task.done} onChange={() =>changeStatus(task.id)}/>
                    <p>{task.text}</p>
                    <button onClick={()=>{
                    let filteredTasks = tasks.filter(t => t.id !== task.id);
                        setTask(filteredTasks);
                        localStorage.setItem("tasks", JSON.stringify(filteredTasks));
                    }} className={css.deleteBtn}>{<DeleteIc/>}</button>
                </li>))}</ul>
                <div className={css.addingCont}>
                     <input type="text" value={value} onChange={txt => setValue(txt.target.value)} className={css.input} placeholder="Type ur task"/>
                    <button onClick={addTask} className={css.addBtn}>Add task</button>
                </div>
        </>
    )
}