import { useState } from "react";
import "./ItemCount.css";
import toast, { Toaster } from 'react-hot-toast';

function ItemCount( {stock, agregar} ) {

  const [cantidad, setCantidad] = useState(0)

  //Amentar contador
    const sumar = () => {
    if (stock) {
      if ((stock - cantidad) != 0){
        setCantidad(cantidad + 1)
      }else {
        toast.success('Se alcanzó el máximo.', {
          style: {
            border: '1px solid #713200',
            padding: '16px',
            color: '#713200',
          },
          iconTheme: {
            primary: '#713200',
            secondary: '#FFFAEE',
          },
        });
      }
    }else {
      toast.success('Se alcanzó el máximo.', {
        style: {
          border: '1px solid #713200',
          padding: '16px',
          color: '#713200',
        },
        iconTheme: {
          primary: '#713200',
          secondary: '#FFFAEE',
        },
      });
    }
  }

  //Restar contador
  const restar = () => cantidad > 0 ? setCantidad(cantidad - 1) : toast.error('No se puede restar más!')
;

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
      <Toaster
  position="top-right"
  reverseOrder={false}
/>
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