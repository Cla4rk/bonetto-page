import React from 'react'
import './faenalastpics.css'
import MainImage from '../../assets/Foto2.png'
const Faenalastpics = () => {
  return (
    <section style={{backgroundColor: "white", padding:'0', paddingBottom:'160px'}}>
      <div className='picContainer'>
          <img className='faenaMainPic' style={{zIndex:1}} src={MainImage} alt="" />
      </div>
    </section>
  )
}

export default Faenalastpics