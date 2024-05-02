import React from 'react'
import img1 from '../asses/imagenensayadero.jpg'
import img2 from '../asses/imagenguitarra.jpg'
import img3 from '../asses/imgSalaDeGrabacio.jpg'
import img4 from '../asses/imgEventos.jpeg'
import { useState } from 'react'


// servicios: sala de ensayo, alquiler de equipos, estudio de grabacion, produccion de eventos

function Servicios() {
    const [hoveredCard, setHoveredCard] = useState(null);

    return (
      <div className='container-services-app'>
          {/* title */}
          <h1 className='title-services'>Servicios</h1>
        {/* contenedor cards */}
        <div className='containers-card-services'>
  
          {/* card 1 */}
          <div className='card-services' onMouseEnter={() => setHoveredCard(1)} onMouseLeave={() => setHoveredCard(null)}>
            <div className={`container-primary-card-service ${hoveredCard === 1 ? 'hidden' : ''}`}>
              <div className='container-img-card-services'>
                <img className='img-services' src={img1} alt='Sala de Ensayo' />
              </div>
              <div>
                <h1>Sala de Ensayo</h1>
              </div>
            </div>
            <div className={`service-description-price ${hoveredCard === 1 ? 'visible' : ''}`}>
              <p className='description-paragraph'>Ponemos a tu disposición alquiler de salas de ensayo para bandas y grupos musicales, con flexibilidad de tiempo para que practiques sin límites. ¡Aprovecha nuestras instalaciones y lleva tu música al siguiente nivel!</p>
              <p>Hora: 25.000$</p>
            </div>
          </div>
  
          {/* card 2 */}
          <div className='card-services' onMouseEnter={() => setHoveredCard(2)} onMouseLeave={() => setHoveredCard(null)}>
            <div className={`container-primary-card-service ${hoveredCard === 2 ? 'hidden' : ''}`}>
              <div className='container-img-card-services'>
                <img className='img-services' src={img2} alt='Alquiler de Equipos' />
              </div>
              <div>
                <h1>Alquiler de Equipos</h1>
              </div>
            </div>
            <div className={`service-description-price ${hoveredCard === 2 ? 'visible' : ''}`}>
              <p className='description-paragraph'>Nuestros equipos están disponibles para alquiler a precios flexibles, adaptados a tus necesidades y por el tiempo que desees. ¡Disfruta de la mejor calidad y tecnología sin comprometer tu presupuesto!</p>
              <p>Hora: </p>
            </div>
          </div>
  
          {/* card 3 */}
          <div className='card-services' onMouseEnter={() => setHoveredCard(3)} onMouseLeave={() => setHoveredCard(null)}>
            <div className={`container-primary-card-service ${hoveredCard === 3 ? 'hidden' : ''}`}>
              <div className='container-img-card-services'>
                <img className='img-services' src={img3} alt='Estudio de Grabacion' />
              </div>
              <div>
                <h1>Estudio de Grabacion</h1>
              </div>
            </div>
            <div className={`service-description-price ${hoveredCard === 3 ? 'visible' : ''}`}>
              <p className='description-paragraph'>Disfrute de la experiencia de grabar sus propias composiciones en nuestro estudio de grabación de alta calidad. Transforme sus ideas en pistas digitales con facilidad y profesionalismo.</p>
              <p>Hora: 300.000</p>
              <p>Tema: 100.000</p>
            </div>
          </div>
  
          {/* card 4 */}
          <div className='card-services' onMouseEnter={() => setHoveredCard(4)} onMouseLeave={() => setHoveredCard(null)}>
            <div className={`container-primary-card-service ${hoveredCard === 4 ? 'hidden' : ''}`}>
              <div className='container-img-card-services'>
                <img className='img-services' src={img4} alt='Alquiler de eventos' />
              </div>
              <div>
                <h1>Alquiler de eventos</h1>
              </div>
            </div>
            <div className={`service-description-price ${hoveredCard === 4 ? 'visible' : ''}`}>
              <p className='description-paragraph'>Alquila nuestro espacio o instrumentos para tu próximo evento. Ofrecemos flexibilidad y comodidad para asegurarte una experiencia exitosa e inolvidable.</p>
              <p>Hora: 300.000</p>
            </div>
          </div>
  
        </div>
      </div>
    );
  }
  
  export default Servicios;

