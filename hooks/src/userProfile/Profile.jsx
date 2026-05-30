import { createContext } from "react";
import { UserContext } from "./UserContext";
import { useContext } from "react";

export default function UserProfile(){
    const user = useContext(UserContext);
    return(
        <h1>Hello, {user.name}</h1>
    )
}