import './faenalastparagraph.css'
import React from 'react'

const FaenaLParagraph = () => {
  return (
    <section className='blur' >
      <div id='aboutus' className='generalTextContainer'>
          <div className='titleContainer'>
              <p style={{color:"#e77500"}} className='p1'> <a className='p1Left'></a>TEAM</p>
              <p style={{color: "white", fontSize:"30px", textAlign:'left', paddingLeft:'28px', fontFamily:'Roobert',fontWeight:'200'}}>Bonetto Sonido & Iluminacion &gt; Faena Art Center</p>
          </div>
          <div className='descriptionContainer'>
              <p style={{fontSize:'24px'}}>En el corazón de nuestro éxito se encuentra nuestro equipo, cuya colaboración y dedicación hacen posible cada aspecto de nuestras creaciones. Desde el diseño de la paleta de colores hasta la meticulosa disposición de cada detalle, cada miembro aporta su experiencia única para crear experiencias inolvidables. Es gracias a nuestro compromiso con la colaboración y la excelencia que logramos superar constantemente las expectativas de nuestros clientes, ofreciendo un ambiente exclusivo y refinado que cautiva los sentidos y deja una impresión duradera.</p>
          </div>
      </div>
    </section>
  )
}

export default FaenaLParagraph