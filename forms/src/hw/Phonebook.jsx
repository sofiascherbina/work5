import { useState } from "react";
import { nanoid } from 'nanoid';
import css from "./phonebook.module.css";

const DeleteIc=()=>{
    return(
        <>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 6H21" stroke="white" stroke-width="2" stroke-linecap="round"/>
            <path d="M8 6V4H16V6" stroke="white" stroke-width="2" stroke-linecap="round"/>
            <path d="M19 6L18 20H6L5 6" stroke="white" stroke-width="2" stroke-linecap="round"/>
            <path d="M10 11V17" stroke="white" stroke-width="2" stroke-linecap="round"/>
            <path d="M14 11V17" stroke="white" stroke-width="2" stroke-linecap="round"/>
        </svg>
        </>
    )
}

const numberArr =  [
    {id: '1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: '2', name: 'Hermione Kline', number: '443-89-12'},
    {id: '3', name: 'Eden Clements', number: '645-17-79'},
    {id: '4', name: 'Annie Copeland', number: '227-91-26'}
]

export default function Phonebook(){
    const [state, setState] = useState(()=>{
        let savedNumbers = localStorage.getItem('contacts');
        console.log(JSON.parse(savedNumbers))
    return {
        contacts: savedNumbers ? JSON.parse(savedNumbers) : numberArr,
        name: '',
        number: '',
        filter:""
    }
    });
    const handleChange =(evt)=>{
        const {name,value} = evt.target
        setState(prev=>({
            ...prev,
            [name]:value,
        }))
    }
    const createContact =(evt)=>{
        evt.preventDefault();
        
        const newContact ={
            id: nanoid(),
            name:state.name,
            number:state.number
        }
        const added = state.contacts.find(cont => cont.number.toLowerCase()=== newContact.number.toLowerCase());
        if(added){
            return alert (`${newContact.name} is alreday in contacts.`)
        }
        else{
             setState(prev=>{
                let newArr = [...prev.contacts, newContact];
                localStorage.setItem('contacts', JSON.stringify(newArr))
                return {
                    contacts:newArr,
                    name:"",
                    number:"",
                    filter:""
                }
             });
        }   
    }
    const visibleContacts = state.contacts.filter(contact =>
        contact.name.toLowerCase().includes(state.filter.toLowerCase())
    );
    return(
        <>
        <h1>Phonebook</h1>
        <form onSubmit={createContact} className={css.form}>
        <label>
            Name:
            <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={state.name}
                onChange={handleChange}/>
        </label>
        <label>
            Number:
            <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                value={state.number}
                onChange={handleChange}/>
        </label>
        <button type="submit" className={css.addBtn}>Add contact</button>
        </form>
        <div>
            <h1>Contacts</h1>
            <p>Find contact by name :</p>
            <input type="text" name="filter" value={state.filter} onChange={handleChange} className={css.filter} placeholder="Find..."/>
            <ul className={css.contactsList}>
                {visibleContacts.map(contact=>(<li key={contact.id}>
                    <p>{contact.name} : <span>{contact.number}</span></p>
                    <button onClick={()=>{
                        let filteredArr = state.contacts.filter(c => c.id !== contact.id)
                        setState({
                            contacts:filteredArr,
                            name: '',
                            number: '',
                            filter:""
                        })
                        localStorage.setItem('contacts', JSON.stringify(filteredArr))
                    }} className={css.deleteBtn}><DeleteIc/></button>
                </li>))}
            </ul>
        </div>
        </>
    )
}