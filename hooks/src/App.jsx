// import { useState } from 'react'
import TaskList from './Tasks'
import { UserContext } from './context/userContext'
import Profile from './context/Profile'
import UserProfile from './userProfile/Profile'
// import { UserContext } from './userProfile/UserContext'
import Player from './Player'
import Focus from './Focus'
import Counter from './Counter'
import Filter from './memo/Filter'
import Task from './callback/Task'

import Count from './memo/Count'
import Cart from './callback/Cart'

function App() {
  // const firstUser = {
  //   name:"Virginia",
  //   age:25
  // }
  // const user = {
  //   name:"Anna"
  // } 
  return (
    <>
    {/* <Focus/> */}
    {/* <Count/>
    <Filter/>
    <Task/> */}
    <Cart/>

      {/* <UserContext.Provider value={firstUser}>
        <Profile/>
      </UserContext.Provider> */}

      {/* <UserContext.Provider value={user}>
        <UserProfile/>
      </UserContext.Provider> */}
    </>
  )
}

// import { useState, useRef, useEffect } from "react";
// const App = () => {
//  const [value, setValue] = useState(0);
//  const btnRef = useRef();
//  // Буде null на першому рендері
//  // і посиланням на DOM-елемент всі наступні
//  console.log(btnRef.current);
//  useEffect(() => {
//    // Ефект виконується після монтування,
//    // тому завжди буде посиланням на DOM-елемент
//    console.log(btnRef.current);
//  });
//  const handleClick = () => {
//    // Кліки будуть після монтування,
//    // тому завжди буде посиланням на DOM-елемент
//    console.log(btnRef.current);
//  };
//  return (
//    <>
//      <button onClick={() => setValue(value + 1)}>
//     Update value to trigger re-render
//      </button>
//      <button ref={btnRef} onClick={handleClick}>
//        Button with ref
//      </button>
//    </>
//  );
// };

// const App = () => {
//  return <Player source="http://media.w3.org/2010/05/sintel/trailer.mp4" />;
// };

export default App
