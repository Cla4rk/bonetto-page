import React from 'react';
import './faenav2pics.css';
import MainImage1 from '../../assets/Foto7.jpg'; // Asegúrate de tener esta imagen en tus assets
import MainImage2 from '../../assets/Foto8.jpg'; // Asume que tienes otra imagen llamada 'Foto4.jpg'

const Faenav2pics = () => {
  return (
    <section style={{ padding:'0',paddingBottom: '0'}} className="faena-section">
      <div className="faena-image-container2">
        <img className="faena-image2" src={MainImage1} alt="Main Display" />
        <img className="faena-image2" src={MainImage2} alt="Secondary Display" />
      </div>
    </section>
  );
};

export default Faenav2pics;
