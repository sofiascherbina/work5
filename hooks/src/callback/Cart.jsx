import { useCallback, useMemo, useState} from "react";
const products = [
  { id: 1, name: "Phone", price: 12000, category: "tech" },
  { id: 2, name: "Laptop", price: 30000, category: "tech" },
  { id: 3, name: "T-shirt", price: 700, category: "clothes" },
  { id: 4, name: "Jeans", price: 1500, category: "clothes" },
  { id: 5, name: "Apple", price: 30, category: "food" },
];
export default function Cart(){
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('all');
    const [cart, setCart] = useState([]);
    // const filterCategory = products.filter(good=>{
    //     if(filter === 'tech') return good.category === 'tech'
    //     if(filter === 'clothes') return good.category === 'clothes'
    //     if(filter === 'food') return good.category === 'food'
    // })
    const handleChange=(evt)=>{
        const {value} = evt.target
        setSearch(value);
    }
    const foundGoods= useMemo(()=>{
        return products.filter((prod)=> {
            const filteredCategory = filter === 'all' || prod.category === filter;
            const searchGood = prod.name.toLocaleLowerCase().includes(search.toLocaleLowerCase());

            return filteredCategory && searchGood
        })
    }, [search, filter]);
    const handleClick =(evt)=>{
        
    }
    return(
        <>
        <input type="text" name="search" value={search} onChange={handleChange}/>
        <ul>
            {foundGoods.map(prod=>(
                <li key={prod.id}>
                    <h2>{prod.name}</h2>
                    <ul>
                        <li><p>{prod.price}</p></li>
                        <li><p>{prod.category}</p></li>
                    </ul>
                    <button>Add to cart</button>
                </li>
            ))}
        </ul>
        <ul>
            <li><label>
                <input type="radio" name="filter" checked={filter === "all"} onChange={()=> setFilter("all")}/>
                All</label></li>
            <li><label>
                <input type="radio" name="filter" checked={filter === "clothes"} onChange={()=> setFilter("clothes")}/>
                Clothes</label></li>
            <li><label>
                <input type="radio" name="filter" checked={filter === "tech"} onChange={()=> setFilter("tech")}/>
                Tech</label></li>
            <li><label>
                <input type="radio" name="filter" checked={filter === "food"} onChange={()=> setFilter("food")}/>
                Food</label></li>
        </ul>
        </>
    )
}