import './navreturn.css'
import React from 'react'
import { Link  as Linked } from 'react-router-dom'
import Logo from '../../assets/BonettoLogoWhite.png'


  const Navreturn = () => {
    return (
      <header>
        <Linked to='/'>
        <img id='top' className='returnlogo' style={{zIndex:1, paddingTop:"25px",marginLeft:'16px', maxWidth:"70%"}} src={Logo} alt="" />
        </Linked>
        <nav className='back'>
            <p><Linked to='/' spy={true} smooth={true} offstet={50} duration={500} ><button>🡨 RETURN TO HOME</button></Linked></p>
        </nav>
      </header>
    )
  }

export default Navreturn 
