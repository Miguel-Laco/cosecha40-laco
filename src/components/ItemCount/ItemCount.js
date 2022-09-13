import { useState } from 'react'
import "./ItemCount.css"
 
function ItemCount( {stock} ) {
  const [valor, setValor] = useState(0);

  //Amentar contador
  const sumar = () => valor < stock ? setValor(valor + 1) : alert (`se alcanzo el maximo`)

    
  //Restar contador
  const restar = () => valor > 0 ? setValor(valor - 1) : alert (`no se puede restar más`);
 
  //Resetear contador
  const reset = () =>{
    setValor(0)
  }
  return (
    <div className="contador">
      <h1>Contador con Boton</h1>
      <span className="contadorValor">En Carrito: {valor}</span>
      <div className="contadorBotones">
        <button className="boton" onClick={sumar}>+</button>
        <button className="boton" onClick={restar}>-</button>        
      </div>
      <div>
        <span  className="contadorValor">En Stock: {stock - valor} </span>
      </div>
      <div>
      <button className="reset" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export {ItemCount}