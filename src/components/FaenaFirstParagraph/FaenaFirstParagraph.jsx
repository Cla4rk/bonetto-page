import React from 'react'
import './faenafirstparagraph.css'
const FaenaParagraph = () => {
  return (
    <section style={{backgroundColor: "white"}}>
      <div id='project' className='generalFaenaContainer'>
        <div  className='titleContainer'>
              <p style={{marginLeft:"0px", color:"#e77500", fontSize:"14px"}} className='p1'> <a className='p1Left'>/01</a> PROJECT</p>
          </div>
          <div className='descriptionContainerFaenaParagraph'>
              <p style={{color: "black", fontSize:"30px"}}>FaenaArtProject</p>
              <p style={{color: "black",fontWeight:"100"}}>Hemos empleado una paleta de colores cálidos, con tonos rojos y ámbar, para crear un entorno sumamente acogedor y refinado. Los distintos matices de luz proporcionan una sensación de calidez y lujo, invitando a los asistentes a sumergirse en un ambiente exclusivo y elegante. La disposición de las luces, cuidadosamente seleccionadas y ubicadas, no solo resalta la belleza de los elementos decorativos, como las palmeras y los intrincados diseños de las particiones, sino que también realza cada detalle de las mesas, desde los arreglos florales hasta la cristalería y cubertería, permitiendo que estos brillen con sutileza.</p>  
          </div>
      </div>
    </section>
  )
}

export default FaenaParagraph