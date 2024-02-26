import './home.css';
import React from 'react';
import {motion, useScroll, useTransform} from "framer-motion";
import HomeLogo from '../../assets/LogoHome.png'


const Home = () => {

  const {scrollYProgress} = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0,-50]);
  const x1 = useTransform(scrollYProgress, [0, 1], [0,50]);

  return (
  <div className='generalContainer' id='top'>
    <div className='sloganContainer'>
      <img className='homeLogo' style={{zIndex:1}} src={HomeLogo} alt="" />
      {/* <motion.h1 style={{x}} className='slogan'>SONIDO & ILUMINACION</motion.h1>
      <motion.h1 style={{x: x1}} className='slogaSubtitle'>BONETTO</motion.h1>
      <motion.h1 style={{x: x1}} className='slogaSubtitle2'>BONETTO</motion.h1>
      */}
    </div>
  </div>
  )
}

export default Home