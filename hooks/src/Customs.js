import { useEffect, useState} from "react";
export const useToggle=()=>{
    const [isOpen, setIsOpen]=useState(false);
    const open= () => setIsOpen(true);
    const close= () => setIsOpen(false);
    return { isOpen, open, close };
}

export const useLocalStorage=()=>{
    const [items, setItems]=useState(()=>{
        const checkedArr = localStorage.getItem('items');
        return checkedArr ? JSON.parse(checkedArr) : [];
    });
    
    useEffect(()=>{
        localStorage.setItem('items', JSON.stringify(items))
    },[items]);
    return [items,setItems]
}