import { useState } from "react";
import css from "./attendance.module.css";
const Course={
        HTML:"HTML",
        CSS:"CSS",
        JS:"JS",
        REACT:"React"
    }
    const INITIAL_STATE = {
        login: "",
        group:"",
        agreed: false,
        course: null,

    };
export default function Attendance(){
    const [state, setState] = useState(INITIAL_STATE);
    const handleChange=(evt)=>{
        const{name,type,value,checked} = evt.target;
        setState(prev=>({
            ...prev,
            [name]: value
        }))
    }
    const handleSubmit=(evt)=>{
        evt.preventDefault();
        console.log(`name : ${state.login} group :${state.group} course :${state.course}`);
        
        reset();
    }
    const reset = () =>{
        setState(INITIAL_STATE);
    }
    return(
        <>
        <h1 className={css.title}>Student's form</h1>
        <form onSubmit={handleSubmit} className={css.form}>
            <section className={css.studData}>
                <input type="text" name="login" placeholder="your name" onChange={handleChange} value={state.login}/>
                <input type="text" name="group" placeholder="your group" onChange={handleChange} value={state.group}/>
            </section>
            <section className={css.studCourse}>
                <h3>Choose your course:</h3>
               <label>
               <input type="radio" name="course" checked={state.course === Course.HTML} value={Course.HTML} onChange={handleChange}/>
               HTML</label>
               <label>
               <input type="radio" name="course" checked={state.course === Course.CSS} value={Course.CSS} onChange={handleChange}/>
               CSS</label>
               <label>
               <input type="radio" name="course" checked={state.course === Course.JS} value={Course.JS} onChange={handleChange}/>
               JS</label>
               <label>
               <input type="radio" name="course" checked={state.course === Course.REACT} value={Course.REACT} onChange={handleChange}/>
               React</label>
            </section>
             <button type="submit" className={css.submitBtn}>
                Sign up as {state.login}
            </button>
        </form>
        </>
    )
}