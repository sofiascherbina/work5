import { useMemo, useState } from "react";

const users = [
  { id: 1, name: "Mango" },
  { id: 2, name: "Poly" },
  { id: 3, name: "Ajax" },
  { id: 4, name: "Kiwi" },
];
export default function Filter(){
    const [query, setQuery] = useState('');
    const handleChange = (evt)=>{
        const {value} = evt.target
        setQuery(value);
    }

    const foundUsers = useMemo(()=>{
            return users.filter(user => user.name.toLowerCase().includes(query.toLowerCase()))
        }, [query]) 
    return(
        <> 
        <input type="text" name="query" value={query} onChange={handleChange}/>
        <ul>
            {foundUsers.map(user=>(
                <li key={user.id}>
                    <p>{user.name}</p>
                </li>
            ))}
        </ul>
        </>
    )
}