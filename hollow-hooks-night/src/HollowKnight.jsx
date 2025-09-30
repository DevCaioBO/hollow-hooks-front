import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HollowPage from './pages/HollowPage.jsx'
import { HollowKnightProviderApp } from './providers/HollowKnightProviderApp.jsx'

function HollowKnight() {
  const [count, setCount] = useState(0)

  return (
    <HollowKnightProviderApp>
      <HollowPage />
    </HollowKnightProviderApp>
  )
}

export default HollowKnight
