import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './homework/index.module.css';
import "./mogo/mogo.module.css";
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
