import './footer2.css'
import React from 'react'
import { Link } from 'react-scroll'
import { Link  as Linked } from 'react-router-dom'
import {motion, useScroll, useTransform} from "framer-motion";

const Footer2 = () => {
  const {scrollYProgress} = useScroll();
  const y = useTransform(scrollYProgress, [0, 1.1], ["0%", "0%"]);

  return (
      <motion.footer style={{y}} id='contact'>
        <motion.section style={{y}} className='sectionFooter'>
          <div  className='generalContainer'>
            <h2>CONTACTANOS Y</h2>
            <h2>CONTANOS TU IDEA.</h2>
            <hr></hr>
            <div className='row'>
              <p>Sentite libre de contactarnos y hacer realidad tus soñadas fiestas.</p>
                <div className='row'>
                  <div className='row2'>
                    <h5>ADDRESS</h5>
                    <h7>Centenario 175, BUENOS AIRES ARGENTINA CP 1405</h7>
                  </div>
                  <div className='row3'>
                    <h5>CONTACT US</h5>
                    <h7>Podes seguirnos tanto por redes como de forma directa a travez de nuestro correo.</h7>
                  </div>
                  
                </div>
                <div className='row4'>
                    <h5><Link to="top" spy={true} smooth={true} offstet={50} duration={500}><button className='btnContact'>TOP 🡩</button></Link></h5>
                    <h5><Link to="project" spy={true} smooth={true} offstet={50} duration={500}><button className='btnContact'>PROJECT</button></Link></h5>
                    <h5><Link to="strategy" spy={true} smooth={true} offstet={50} duration={500}><button className='btnContact'>STRATEGY</button></Link></h5>
                    <h5><Link to="adaptability" spy={true} smooth={true} offstet={50} duration={500}><button className='btnContact'>ADAPTABILITY</button></Link></h5>
                    <h5><Linked to='/' spy={true} smooth={true} offstet={50} duration={500}><button className='btnContact'>BACK TO HOME</button></Linked></h5>
                  </div>
            </div>
            <div className='lowFooter'>
              <p className='inc'>© BONETTO SONIDO & ILUMINACION S.A. 2023 All rights reserved</p>
            </div>
          </div>
        </motion.section>
      </motion.footer>

  )
}
export default Footer2;