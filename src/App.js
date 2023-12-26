import './App.css';
import Logo from './componentes/Logo';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';
import {evaluate} from 'mathjs';

function App() {

  const [input,setInput]=useState ('');

  const agregarInput = val =>{
    setInput(input + val);
  };

  const calcularResultado = () => {
    try {
      // Verificar si la entrada termina con un operador
      const ultimoCaracterEsOperador = /[-+*/]$/.test(input);
  
      if (input && !ultimoCaracterEsOperador) {
        setInput(evaluate(input).toString());
      } else {
        alert('Entrada no válida para calcular el resultado.');
      }
    } catch (error) {
      alert('Error en la expresión matemática.');
      setInput('');
    }
  };

  return (
    <div className="App">
      <Logo></Logo>
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div> 
        <div className='fila'>
          <BotonClear manejarClear={()=>setInput('')}>
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
