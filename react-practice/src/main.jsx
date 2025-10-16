import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ThemeToggle from './App9.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeToggle />
  </StrictMode>,
)
