import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Footer from './Components/Footer'
import Header from './Components/header'
import Navbar from './Components/Navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Navbar/>
   <Header/>
   <Footer/>
   </>
  )
}

export default App
