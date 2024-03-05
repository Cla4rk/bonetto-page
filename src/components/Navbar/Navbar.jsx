import './navbar.css'
import React from 'react'
import { Link } from 'react-scroll'
import { Link  as Linked } from 'react-router-dom'
import Logo from '../../assets/BonettoLogo.png'

  const Navbar = () => {
    return (
      <header>
        <Linked to='/'>
        <img id='home' className='navlogo' style={{zIndex:1, paddingTop:"25px",marginLeft:'16px', maxWidth:"70%"}} src={Logo} alt="" />
        </Linked>
        <nav className='navBar'>
            <p><Link to="aboutus" spy={true} smooth={true} offstet={50} duration={500} ><button>ABOUT US</button></Link></p>
            <p><Link to="work" spy={true} smooth={true} offstet={50} duration={500} ><button>WORK</button></Link></p>
            <p><Link to="clients" spy={true} smooth={true} offstet={50} duration={500} ><button>EQUIPMENT</button></Link></p>
            <p><Link to="contact" spy={true} smooth={true} offstet={50} duration={500} ><button>BOTTOM 🡫</button></Link></p>
        </nav>
      </header>
    )
  }

export default Navbar 
