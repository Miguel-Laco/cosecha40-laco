
import { useState } from "react";
import "./ItemCount.css"
 
function ItemCount( {stock, agregar} ) {

  const [cantidad, setCantidad] = useState(0)

  //Amentar contador
  const sumar = () => cantidad < stock ? setCantidad(cantidad + 1) : alert (`se alcanzo el maximo`)

  //Restar contador
  const restar = () => cantidad > 0 ? setCantidad(cantidad - 1) : alert (`no se puede restar más`);

  //Validación y confirmacion
  const confirmar = () => {
    if (cantidad === 0) {
      return
    } else {
      agregar(cantidad)
    }
  }

  return (
    <div className="contador">
      <span className="contadorValor">Enviar a tu carrito: {cantidad}</span>
      <div className="contadorBotones">
        <button className="boton" onClick={sumar}>+</button>
        <button className="boton" onClick={restar}>-</button>        
      </div>
      <div>
        <span  className="contadorValor">En Stock: {stock - cantidad} </span>
      </div>
      <button className="boton" onClick={confirmar}>Agregar a carrito</button>
    </div>
  );
}

export {ItemCount}