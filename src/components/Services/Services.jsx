import './services.css'
import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Image1 from '../../assets/image1.jpg'
import Image2 from '../../assets/BonettoLogo.png'
import Image3 from '../../assets/BonettoLogoWhite.png'

const Services = () => {

  return (
    <section className='white' >
      <div id='work' className='generalTextContainer'>
        <div className='titleContainer'>
          <p className='p1'> <a className='p1Left'>/02</a> WORK</p>
        </div>
        <div className='descriptionSContainer'>
          <Link to="/Cumple" style={{textDecoration:0}}>
            <h1 className='item serText'>FAENA ART CENTER</h1>
          </Link>
          <hr></hr>
          <h1 className='item serText'>YACHT PUERTO M</h1>
          <hr></hr>
          <h1 className='item serText'>DOK HARAS</h1>
        </div>
      </div>
    </section>
  )
}

export default Services
