import React, {Component} from "react";
import axios from "axios";
import css from "./users.module.css"
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

const UserList=({users})=>{
    return(
        <>
        <ul className={css.userList}>
            {users.map(({objectID, name, username, address, phone})=>(
                <li key={objectID} className={css.userList_li}>
                    <h3>Name: {name}</h3>
                    <h3>Username: {username}</h3>
                    <p>Address: </p>
                    <ul className={css.addressList}>
                        <li>Street: {address.street}</li>
                        <li>City: {address.city}</li>
                        </ul>
                    <p>Phone: {phone}</p>
                </li>
            ))}
        </ul>
        </>
    )
}

export default class User extends Component{
    state={
        users:[],
        isLoading:false,
        error:null
    }
    async componentDidMount(){
        this.setState({
            isLoading:true
        })
        try{
            const response = await axios.get('/users');
            this.setState({
                users:response.data,
            })
        }
        catch(error){
            this.setState({error})
        }
        finally{
            this.setState({isLoading:false})
        }
    }
    render(){
        const {users, isLoading} = this.state
        return(
            <>
            { isLoading ? <p>Loading...</p> : <UserList users ={users}/>}  
            </>
        )
    }
}