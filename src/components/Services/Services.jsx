import './services.css'
import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

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
