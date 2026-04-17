import { useState } from "react";
import css from "./signsec.module.css";
const INITIAL_STATE = {
 email: "",
 name: "",
};
export default function SignUpSec(){
    const [form, setForm] = useState(INITIAL_STATE);
    const [errors, setErrors] = useState({
        name: "",
        email: ""
    });
    
    const handleChange=(evt)=>{
        const {name,value} = evt.target;
        setForm(prev=>({
            ...prev,
            [name]:value
        }));
        validation(name,value)
    }
    const validation =(name,value)=>{
        let error = '';
        if(name === 'name'){
            if(value.length < 2){
                error = 'Name is too short'
            }
        }
        if(name === 'email'){
            if(!value.includes('@')){
                error = 'Email must contain "@"'
            }
        }
        setErrors(prev=>({
            ...prev,
            [name]:error
        }))
    }
        
    const handleSubmit=(evt)=>{
        evt.preventDefault();
        alert (`Sign up by ${form.name} is successful`);
        reset();
    }
    const reset = () =>{
        setForm(INITIAL_STATE);
    }
    return(
        <>
        <h1>Форма реєстрації</h1>
        <form onSubmit={handleSubmit} className={css.form}>
            <label htmlFor="name" className={css.formInput}> Ім'я :
                <input type="text" name="name" value={form.name} onChange={handleChange} required/>
            </label>
            <label htmlFor="email" className={css.formInput}> Email :
                <input type="text" name="email" value={form.email} onChange={handleChange} required/>
            </label>
            <button type="submit" className={css.submitBtn}>Надіслати дані</button>
        </form>
        <div>
            <h2>Live preview</h2>
            <p>Ім'я : {form.name}</p>
            <p>Email : {form.email}</p>
        </div>
        <p style={{color:"red"}}>{errors.name}</p>
        <p style={{color:"red"}}>{errors.email}</p>
        </>
    )
}