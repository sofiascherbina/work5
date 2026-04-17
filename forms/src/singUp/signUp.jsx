import { useState } from "react";
import css from "./form.module.css";
const INITIAL_STATE = {
 email: "",
 password: "",
};
export default function SignUpForm(){
    const [state,setState] = useState(INITIAL_STATE);
    const handleChange=(evt)=>{
        const {name,value} = evt.target;
        setState(prev=>({
            ...prev,
            [name]:value
        }))
    }
   const handleSubmit=(evt)=>{
        evt.preventDefault();
        console.log(`password : ${state.password} email: ${state.email}`)
        if(state.password.length !== 6){
             alert('password may contain only 6 symbols');
             return
        }
        if (!state.email.includes('@')){
            alert('password must contain symbol "@"');
            return
        }
        alert('Sign up is successful');
        reset()
    }
    const reset = () =>{
        setState(INITIAL_STATE);
    }
    return(
        <>
        <h1>Welcome Back</h1>
        <form onSubmit={handleSubmit} className={css.form}>
            <ul className={css.inputList}>
                <li><input  name="email" value={state.email} onChange={handleChange} required placeholder="Type your email" className={css.input}/></li>
                <li><input type="password" name="password" value={state.password} onChange={handleChange} required placeholder="Type your password" className={css.input}/></li>
            </ul>
            <button type="submit" className={css.submitBtn}>Sign up</button>
        </form>
        <div>
            <p>Your email : {state.email}</p>
            <p>Your name : {state.password}</p>
        </div>
        </>
    )
}