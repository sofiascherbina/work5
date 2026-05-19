import { useState, useEffect } from "react";

export default function Users (){
    const [user, setUser] = useState({
        users: [],
        query: "",
        loading: false,
        IntervalId:setInterval(() => {
            this.fetchUsers();
        }, 5000)
    });
    useEffect(()=>{
        localStorage.setItem("users", JSON.stringify(user.users));
    },[user.users]);

    const fetchUsers=()=>{

    }
    return(
        <div>
            <input
              value={user.query}
              onChange={handleChange}
              placeholder="Search..."
            />

            {user.loading && <p>Loading...</p>}

            <ul>
              {user.users.map(user => (
                <li key={user.id}>{user.name}</li>
              ))}
            </ul>
      </div>
    )
}