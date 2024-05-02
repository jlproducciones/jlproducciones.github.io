import React from 'react'
import img1 from '../asses/imagenbarockhipotetico.jpg'
import img2 from '../asses/imgEstudioGrabacion.jpeg'
import img3 from '../asses/map.png'

function Ubicacion() {
  return (
    <div className='container-ubication-app'>
      <h1 className='title-ubicacion'>Ubicacion</h1>
<div className='container-central-ubication'>

<div className='map'>
<img className='map-img' src={img3} />
<h4>Mapa Del Lugar</h4>
</div>

<div className='ubication-images-container'>
<div className='container-img-ubicacion'>
<img src={img1} alt='imagen1' className='imagen1-ubication'/>
<h4>JL Prodducions</h4>
</div>
<div className='container-img-ubicacion'>
<img src={img2} alt='imagen2' className='imagen2-ubication' />
<h4>Studio Jl Produccions</h4>
</div>
</div>

</div>


    </div>
  )
}

export default Ubicacion