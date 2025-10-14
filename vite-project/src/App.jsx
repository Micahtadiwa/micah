import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import MyWork from './Components/MyWork/MyWork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import './App.css'
import { FaWhatsappSquare } from "react-icons/fa";

const App = () => { 
  return (
    <div>
      <a href='https://wa.me/+263714224055' className='whatsapp' target='_blank' rel="noreferrer"><FaWhatsappSquare/></a>
      <div>
        <NavBar/>
      <Hero/>
      <About/>
      <Services/>
      <MyWork/>
      <Contact/>
      <Footer/>
      </div>
    </div>
  )
} 

export default App