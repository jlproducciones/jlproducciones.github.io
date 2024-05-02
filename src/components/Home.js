import React from 'react'
import Inicio from './Inicio'
import Servicios from './Servicios'
import Ubicacion from './Ubicacion'
import Contacto from './Contacto'


function Home() {
  return (
    <div className='home-container'>


        <nav className='barnav-contact'>
        <button className='contact-button-whatssap'><a target='_blank' href='https://cristiancamilomedinasanchez.github.io'>Whatssap</a></button>
    <button className='contact-button-instagram'><a target='_blank' href='https://www.instagram.com/j_lproducciones/'>Instagram</a></button>
    <button className='contact-button-facebook'><a target='_blank' href='https://www.facebook.com/search/top?q=jl%20producciones'>Facebook</a></button>
        </nav>
<nav className='barnav'>
<a href='#inicio' className='barnavItem'>Inicio</a>
<a href='#servicios' className='barnavItem'>Servicios</a>
<a href='#ubicacion' className='barnavItem'>Ubicacion</a>
<a href='#contacto' className='barnavItem' style={{color: "red"}}>Eventos</a>
</nav>

<React.Fragment>
    <div id='inicio'>
        <Inicio />
    </div>
    <div id='servicios'>
        <Servicios />
    </div>
    <div id='ubicacion'>
        <Ubicacion />
    </div>
    <div id='contacto'>
        <Contacto />
    </div>

</React.Fragment>


    </div>
  )
}

export default Home