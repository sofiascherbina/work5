import { useState } from 'react'
import './App.css'
import Greeting from './components/Greeting';
import Message from './components/Message';
import Button from './components/Button';

function ShowMessage(){
  console.log('Hot girls love Billie Eilish');
  alert('Hot girls love Billie Eilish');
}

function App() {
  return (
    <>
    <Greeting name="Billie Eilish"/>
    <Message text ="Be good to yourself and be nice to yourself"/>
    <Button onClick={ShowMessage}/>
    </>
  )
}

export default App
