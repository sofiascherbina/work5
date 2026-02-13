import { useState } from 'react'
import './App.css'
import Gallery from './components/Gallery';
import paintings from './paintings.json';

function App() {
  return (
    <>
      <Gallery items = {paintings}/>
    </>
  )
}

export default App
