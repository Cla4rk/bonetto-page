import React from 'react';
import './faenavpics.css';
import MainImage1 from '../../assets/Foto4.jpg'; // Asegúrate de tener esta imagen en tus assets
import MainImage2 from '../../assets/Foto5.jpg'; // Asume que tienes otra imagen llamada 'Foto4.jpg'

const Faenavpics = () => {
  return (
    <section style={{ padding:'0',paddingBottom: '0'}} className="faena-section">
      <div className="faena-image-container">
        <img className="faena-image" src={MainImage1} alt="Main Display" />
        <img className="faena-image" src={MainImage2} alt="Secondary Display" />
      </div>
    </section>
  );
};

export default Faenavpics;
