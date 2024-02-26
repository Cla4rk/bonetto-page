import React from 'react'
import Home from "../Home/Home.jsx";
import AboutUs from "../AboutUs/AboutUs.jsx";
import Services from "../Services/Services.jsx";
import Contact from "../Contact/Contact.jsx";
import Footer from "../Footer/Footer.jsx";
import Navbar from "../Navbar/Navbar.jsx";


const SPA = () => {
  return (
    <>
    <div className='pepe'>
        <Navbar/>
        <Home/>
        <AboutUs/>
        <Services/>
        <Contact/>
        <Footer/>
    </div>
    </>
  )
}

export default SPA
