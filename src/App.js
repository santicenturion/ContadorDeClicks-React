import './App.css';
import Boton from './components/Boton.js';
import Contador from './components/Contador.js';
import {useState} from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0)

  const manejarClick = () => {
    setNumClicks(numClicks + 1);
  }

  const reiniciarContador = () => {
    setNumClicks(0);
  }

  return (
    <div className="App">

       <div className='contenedor-principal' >

          <Contador numClicks= {  numClicks } />
          <Boton 
          texto = 'Click'
          botonDeClick = {true}
          manejarClick={ manejarClick } />
          <Boton texto = 'Reiniciar'
          botonDeClick = {false}
          manejarClick={ reiniciarContador } />
       </div>
     
    </div>
  );
}

export default App; 





 
