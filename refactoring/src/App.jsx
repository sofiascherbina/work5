import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import LikeButton from './Refactoring'
import TaskList from './Refactoring'
import KeyTracker from './Refactoring'
import Timer from './Timer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Timer/>
    </>
  )
}

export default App
