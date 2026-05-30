import { UserContext} from "./userContext";
import { useContext} from "react";
export default function Profile(){
    const user = useContext(UserContext);
    return(
        <div>
            <h1>{user.name}</h1>
            <p>{user.age}</p>
        </div>
    ) 
}