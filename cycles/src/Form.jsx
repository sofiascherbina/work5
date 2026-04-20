import { useEffect, useState } from "react";
export default function Form(){
    const[state,setState]= useState({
        name:"",
        email:"",
        password:""
    })
    useEffect(() => {
        console.log("component was added to DOM");
    }, []);

    useEffect(() => {
        console.log("component was updated");
    }, [state]);
    useEffect(() => {
        return () => {
            console.log("component was deleted");
        };
    }, []);
    
   const handleChange=(evt)=>{
        const{name,value} = evt.target
        setState(prev=>({
            ...prev,
            [name]:value
        }))
    }
   const handleSubmit=(evt)=>{
        evt.preventDefault();
    }
        return(
            <>
            <form onSubmit={handleSubmit}>
                <label>Name:
                    <input type="text" name="name" value={state.name} onChange={handleChange}/>
                </label>
                <label> Email :
                    <input type="email" name="email" value={state.email} onChange={handleChange}/>
                </label>
                <label>Password : 
                    <input type="number" name="password"  value={state.password} onChange={handleChange}/>
                </label>
                <button type="submit">Submit</button>
            </form>
            <p>Name:{state.name}</p>
            <p>Email:{state.email}</p>
            <p>Password:{state.password}</p>
            </>
        )
    }

