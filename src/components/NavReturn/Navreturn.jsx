import './navreturn.css'
import React from 'react'
import { Link  as Linked } from 'react-router-dom'
import Logo from '../../assets/BonettoLogo.png'


  const Navreturn = () => {
    return (
      <header>
        <Linked to='/'>
        <img style={{zIndex:1}} src={Logo} alt="" />
        </Linked>
        <nav>
            <p><Linked to='/' spy={true} smooth={true} offstet={50} duration={500} ><button> RETURN TO HOME</button></Linked></p>
        </nav>
      </header>
    )
  }

export default Navreturn 
