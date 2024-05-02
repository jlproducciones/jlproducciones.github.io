import React from 'react'
import evento1 from '../asses/eventos/evento1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import evento2 from '../asses/eventos/evento2.jpg'
import { faSkull } from '@fortawesome/free-solid-svg-icons';
import { faSkullDead } from '@fortawesome/free-solid-svg-icons';
import { faSkullCrossbones } from '@fortawesome/free-solid-svg-icons';
import { faBoneBreak } from '@fortawesome/free-solid-svg-icons';
import evento3 from '../asses/eventos/evento2.jpg'






function Contacto() {
  return (
    <div className='container-contact-app'>
      <h1 style={{color: "red"}}>Eventos</h1>
     
     <div className='events-container'>

      <div className='eventos'>
        <img className='img-eventos' src={evento1} />
        <div className='title-event-container'>
        <h4>Ruido en Manizales</h4>
        </div>
        <div className='container-title-bands'>
        <h5>Bandas</h5>
    
       
        <ul className='bands-event'>
          <li className='band-item'  icon={faSkull}>KANCER S.A</li>
          <li className='band-item' icon={faSkull}>SIN ANESTESIA</li>
          <li className='band-item' icon={faSkull}>DOOMSDAY</li>
          <li className='band-item' icon={faSkull}>CORROSION CEREBRAL</li>
        </ul>
      </div>
      </div>

      <div className='eventos'>
        <img className='img-eventos'  src={evento2} />
        <div className='title-event-container'>
        <h4>Human Grinder</h4>
        </div>
        <div className='container-title-bands' >
        <h5>Bandas</h5>
       
        
        <ul className='bands-event'>
          <li className='band-item'>HUMAN GRINDER</li>
          <li className='band-item'>SADICO</li>
          <li className='band-item'>REPUDIO</li>
          <li className='band-item'>INSECTOS POSTMORTEM</li>
        </ul>
      </div>
      </div>
     </div>

    </div>
  )
}

export default Contacto
