import React from 'react'
import imgLogo from '../asses/logo.jpg'
import { useState } from 'react'

function Inicio() {
const [visibilityInicioInformation, setVisibilityInicioInformation] = useState(true)


const functionVisibilityInformation = () => {
  setVisibilityInicioInformation(false)
}

  return (
    <div className='inicio-app-container'>

      {
        visibilityInicioInformation &&   <div className='container-services-information'>
        <div className='container-btn-information'>
        <button className='btn-visibility-information' onClick={functionVisibilityInformation}>X</button>
</div>
        <p className='service-information'>Somos productores de eventos en la ciudad de Manizales Colombia.
       

Contamos con equipos y amplificación que garantizan una amplia fidelidad sonora, para cualquier tipo de agrupacion.</p>

</div>  
      }

<div className='logo-container'>
<div className='img-logo-container'>
    <img src={imgLogo} className='img-logo' />
</div>

<div className='central-title'>
    <h4 className='jl-produccions-title'>MANIZALES COLOMBIA</h4>
</div>
</div>
    </div>
  )
}

export default Inicio