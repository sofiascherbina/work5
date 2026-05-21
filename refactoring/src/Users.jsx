import { useState, useEffect } from "react";

export default function Users (){
    const [user, setUser] = useState({
        users: [],
        query: "",
        loading: false,
        // IntervalId:setInterval(() => {
        //     fetchUsers();
        // }, 5000)
    });
    useEffect(()=>{
      fetchUsers();
      const intervalId = setInterval(() => {
          fetchUsers();
        }, 5000);

      return () => {
          clearInterval(intervalId);
      };
    }, [user.query])
    useEffect(()=>{
        localStorage.setItem("users", JSON.stringify(user.users));
    },[user.users]);

    const fetchUsers=()=>{
      setUser(prev=>({...prev, loading:true}));

       setTimeout(() => {
      const data = [
        { id: 1, name: "John" },
        { id: 2, name: "Anna" },
        { id: 3, name: "Mike" },
      ].filter(u =>
        u.name.toLowerCase().includes(user.query.toLowerCase())
      );

      setUser(prev =>({ ...prev, users: data, loading: false }));
    }, 500);
    }
    const handleChange = (e) => {
      setUser(prev=>({ ...prev,query: e.target.value }));
    };
    return(
        <div>
            <input
              value={user.query}
              onChange={handleChange}
              placeholder="Search..."
            />

            {user.loading && <p>Loading...</p>}

            <ul>
              {user.users.map(u => (
                <li key={u.id}>{u.name}</li>
              ))}
            </ul>
      </div>
    )
}
