import React from 'react'
import './faenasecondparagraph.css'
const FaenaSParagraph = () => {
  return (
    <section style={{backgroundColor: "white"}}>
      <div id='strategy' className='generalFaenaContainer'>
        <div  className='titleContainer'>
              <p style={{marginLeft:"0px", color:"#e77500", fontSize:"14px"}} className='p1'> <a className='p1Left'>/02</a> STRATEGY</p>
          </div>
          <div className='descriptionContainerFaenaSecondParagraph'>
              <p style={{color: "black", fontSize:"30px"}}>FaenaArtStrategy</p>
              <p style={{color: "black",fontWeight:"100"}}>Nuestra estrategia se enfoca en crear una experiencia sensorial completa que transmita lujo y exclusividad. Cada detalle, desde la paleta de colores cálidos hasta la disposición de las luces y la decoración de las mesas, está diseñado para cautivar los sentidos y dejar una impresión duradera. El objetivo es superar las expectativas, ofreciendo una atmósfera acogedora y refinada que invite a disfrutar y sumergirse en un ambiente exclusivo y elegante.</p>  
          </div>
      </div>
    </section>
  )
}

export default FaenaSParagraph