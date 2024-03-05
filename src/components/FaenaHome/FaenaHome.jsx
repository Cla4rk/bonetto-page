import './faenahome.css';
import React from 'react';
import {motion, useScroll, useTransform} from "framer-motion";
import HomeLogo from '../../assets/Foto2.png'


const Faenahome = () => {

  const {scrollYProgress} = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0,-50]);
  const x1 = useTransform(scrollYProgress, [0, 1], [0,50]);

  return (
  <div style={{padding:0}} className='generalContainer' >
    <div className='sectiontTitleContainer'>
        <h1 className='sectiontTitle'>FAENA ART CENTER</h1>
        <div className='faenaRow'>
            <div className='row2'>
                <h5 className='faenaH5'>CLIENT</h5>
                <h7>FAENA</h7>
            </div>
            <div className='row3'>
                <h5 className='faenaH5'>DELIRVABLES</h5>
                <h7>ILUMINATION</h7>
                <h7 style={{marginTop:"30px"}}>SOUND</h7>
            </div>
        </div>
        <div className='faenaRow2'>
            <div className='row2'>
                <h5 className='faenaH5'>ROLE</h5>
                <h7>ART DIRECTION</h7>
                <h7 style={{marginTop:"30px"}}>DESIGN</h7>
            </div>
            <div className='row3'>
                <h5 className='faenaH5'>DATE</h5>
                <h7>21/10/2023</h7>
            </div>
        </div>
    </div>
    <div className='sloganContainerFaena'>
        <img className='homeLogo2' style={{zIndex:1}} src={HomeLogo} alt="" />
    </div>
  </div>
  )
}

export default Faenahome