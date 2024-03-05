import React from 'react'
import './faenaspics.css'
import MainImage from '../../assets/Foto6.jpg'
const Faenaspics = () => {
  return (
    <section style={{backgroundColor: "white", padding:'0', paddingBottom:"0px"}}>
      <div className='picContainer'>
          <img className='faenaMainSPic' style={{zIndex:1}} src={MainImage} alt="" />
      </div>
    </section>
  )
}

export default Faenaspics