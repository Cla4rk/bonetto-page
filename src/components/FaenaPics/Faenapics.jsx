import React from 'react'
import './faenapics.css'
import MainImage from '../../assets/Foto3.jpg'
const Faenapics = () => {
  return (
    <section style={{backgroundColor: "white", padding:'0'}}>
      <div className='picContainer'>
          <img className='faenaMainPic' style={{zIndex:1}} src={MainImage} alt="" />
      </div>
    </section>
  )
}

export default Faenapics