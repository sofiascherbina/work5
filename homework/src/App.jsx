import { useState } from 'react'
import './App.css'

let name = 'Billie Eilish';
let storeLink = {
  name: "Billie's store",
  link:"https://store.billieeilish.com/?srsltid=AfmBOoqq6gAKweqPPk52Afh7DUxOpBp1cOf7brdzIk0tvbOcpeOAqPni"
}
let num1 = 33;
let num2= 52;

let colours =  ["Червоний", "Синій", "Зелений"];
function Task() {
  return (
    <>
      <h1>{name}</h1>
      <p>Ласкаво просимо до нашого сайту!</p>
      <img src="https://i.pinimg.com/736x/4f/ef/ef/4fefefa6fa92cf65e22c4b0a0fb49e2d.jpg" alt="billie" width={300}/>
      <a href={storeLink.link}>{storeLink.name}</a>
      <p>{num1 + num2}</p>
      <ul>{colours.map(colour => (<li>{colour}</li>))}</ul>
    </>
  )
}

export default Task
