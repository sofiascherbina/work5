import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import SignUpForm from './singUp/signUp'
import Attendance from './attendance/Attendance'
import Phonebook from './hw/Phonebook'
import SignUpSec from './signUpSec/signUpSec'
import Todolist from './todolist/Todolist'
import './App.css'

function App() {
  return (
    <>
      {/* <SignUpForm/> */}
      {/* <Attendance/> */}
      {/* <Phonebook/> */}
      {/* <SignUpSec/> */}
      <Todolist/>
    </>
  )
}

export default App
