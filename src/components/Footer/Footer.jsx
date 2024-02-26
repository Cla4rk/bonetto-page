import './footer.css'
import React from 'react'
import { Link } from 'react-scroll'
import {motion, useScroll, useTransform} from "framer-motion";

const Footer = () => {
  const {scrollYProgress} = useScroll();
  const y = useTransform(scrollYProgress, [0, 1.1], ["70%", "0%"]);

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
                    <h5><Link to="aboutus" spy={true} smooth={true} offstet={50} duration={500}><button className='btnContact'>ABOUT US</button></Link></h5>
                    <h5><Link to="work" spy={true} smooth={true} offstet={50} duration={500}><button className='btnContact'>WORK</button></Link></h5>
                    <h5><Link to="clients" spy={true} smooth={true} offstet={50} duration={500}><button className='btnContact'>TEAMS</button></Link></h5>
                    <h5><Link to="contact" spy={true} smooth={true} offstet={50} duration={500}><button className='btnContact'>CONTACT</button></Link></h5>
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
export default Footer;