import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HollowKnight from './HollowKnight.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HollowKnight />
  </StrictMode>,
)
