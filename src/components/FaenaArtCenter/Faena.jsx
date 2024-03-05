import React from 'react'
import './faena.css';
import Faenahome from '../FaenaHome/FaenaHome.jsx';
import Navreturn from "../NavReturn/Navreturn.jsx";
import Faenadesc from '../FaenaDescripcion/FaenaDescripcion.jsx';
import Faenapics from '../FaenaPics/Faenapics.jsx';
import FaenaParagraph from '../FaenaFirstParagraph/FaenaFirstParagraph.jsx';
import Faenavpics from '../FaenaVPics/FaenaVPics.jsx';
import FaenaSParagraph from '../FaenaSecondParagraph/FaenaSecondParagraph.jsx';
import Faenaspics from '../FaenaSPics/FaenaSPics.jsx';
import Faenav2pics from '../FaneV2Pics/FaenaV2Pics.jsx';
import Footer2 from '../Footer2/Footer2.jsx';
import FaenaTParagraph from '../FaenaThirdParagraph/FaenaThirdParagraph.jsx';
import Faenalastpics from '../FaenaLastPics/FaenaLastPics.jsx';
import FaenaLParagraph from '../FaenaLastParagraph/FaenaLastParagraph.jsx';


const Faena = () => {
  return (
    <>
    <div className='pepe'>
        <Navreturn/>
        <Faenahome/>
        <Faenadesc/>
        <Faenapics/>
        <FaenaParagraph/>
        <Faenavpics/>
        <FaenaSParagraph/>
        <Faenaspics/>
        <Faenav2pics/>
        <FaenaTParagraph/>
        <Faenalastpics/>
        <FaenaLParagraph/>
        <Footer2/>
    </div>
    </>
  )
}

export default Faena
