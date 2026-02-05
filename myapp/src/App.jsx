import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// const favouriteBooks = [
//   { id: "id-1", name: "JS for beginners" },
//   { id: "id-2", name: "React basics" },
//   { id: "id-3", name: "React Router overview" },
//   { id: "id-4", name: "Redux in depth" },
// ];
// function App(){

//   // return (
//   //   <>
//   //     <h1>My favourite books</h1>
//   //     <ul>{favouriteBooks.map(book => (<li key={book.id}>{book.name}</li>))}</ul>
//   //   </>
//   // )
// }

// export default App
const colours = [
  { id: "id-1", name: "purple" },
  { id: "id-2", name: "green" },
  { id: "id-3", name: "blue" },
];
let tem = 25;

function Task(){
  return (
    <>
    <h1>Вітаю на моїй сторінці</h1>
    <p>Це перший параграф мого документу</p>
    <img src="https://i.pinimg.com/736x/4f/ef/ef/4fefefa6fa92cf65e22c4b0a0fb49e2d.jpg" alt="img" width={300}/>
    <ul>{colours.map(color => (<li key={color.id}>{color.name}</li>))}</ul>
    <a href="https://www.youtube.com/watch?v=XkFhEoXnMrc&list=RDXkFhEoXnMrc&start_radio=1">2023 tour</a>
    {tem > 20 ? (
      <p>На вулиці тепло</p>
    ):(
      <p>На вулиці холодно</p>
    )}
    </>
  )
}

export default Task
