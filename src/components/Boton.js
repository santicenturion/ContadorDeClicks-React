import React from 'react'
import '../stylesheets/Boton.css'


const Boton = ({texto, botonDeClick, manejarClick}) => {
  return (
    <button className={ botonDeClick ? 'boton-click' : 'boton-reiniciar' } onClick = { manejarClick } >
        {texto}
    </button>
  )
}

export default Boton 