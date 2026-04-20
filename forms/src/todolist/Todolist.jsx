import { useState } from "react";
import { nanoid } from 'nanoid';
import css from "./todo.module.css"

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

const initialTodos = 
[
  { "id": "id-1", "text": "Вивчити основи React", "completed": false },
  { "id": "id-2", "text": "Розібратися з React Router", "completed": false },
  { "id": "id-3", "text": "Пережити Redux", "completed": false }
];

export default function Todolist(){
    const [tasks, setTasks]=useState({
        todos: initialTodos,
        text:"",
        search:""
    });
    const handleChange=(evt)=>{
        const {name,value} = evt.target
        setTasks(prev=>({
            ...prev,
            [name]:value
        }))
    }
    const createNewTask=()=>{
        const newTask ={
            id:nanoid(),
            text:tasks.text,
            completed:false
        }
        setTasks(prev=>({
            ...prev,
            todos:[...prev.todos, newTask],
            text:'',
            search:""
        }))
    }
    const toggleTask =(id)=>{
        setTasks(prev=>({
            ...prev,
            todos:prev.todos.map(task=>
                task.id === id
                ?{...task, completed: !task.completed}
                :task
            )  
        }))
    }
    const searchedTasks = tasks.todos.filter(todo => 
        todo.text.toLowerCase().includes(tasks.search.toLowerCase())
    )  
    return(
        <>
        <h1>ToDoList</h1>
        <div className={css.hero}>
            <div className={css.countTitle}>
                <h3>All : {tasks.todos.length}</h3>
                <h3>Done : {tasks.todos.filter(task => task.completed).length}</h3>
            </div>
            <label>Search : 
                <input type="text" name="search" value={tasks.search} onChange={handleChange} placeholder="search your task" className={css.searchInput}/>
            </label>
        </div>
            <ul className={css.tasksList}>
                {searchedTasks.map(task =>(<li key={task.id}>
                    <input type="checkbox" checked={task.completed} onChange={()=>toggleTask(task.id)}/>
                    <p style={{textDecoration:task.completed
                        ?'line-through'
                        :'none'
                    }}>{task.text}</p>
                    <button onClick={()=>{
                      const searchedTasks = tasks.todos.search(t => t.id !== task.id)  
                      setTasks({
                        todos : searchedTasks,
                        text:'',
                        search:""
                      })
                    }} className={css.deleteBtn}><DeleteIc/></button>
                </li> ))}
            </ul>
            <div className={css.addForm}>
                <input type="text" name="text" value={tasks.text} onChange={handleChange} className={css.addInput} placeholder="type ur task"/>
                <button onClick={createNewTask} className={css.addBtn}>Add task</button>
            </div>
        </>
    )
}