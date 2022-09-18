
import "./ItemCount.css"
 
function ItemCount( {stock, count, setCount} ) {

  //Amentar contador
  const sumar = () => count < stock ? setCount(count + 1) : alert (`se alcanzo el maximo`)

  //Restar contador
  const restar = () => count > 0 ? setCount(count - 1) : alert (`no se puede restar más`);

  return (
    <div className="contador">
      <span className="contadorValor">Enviar a tu carrito: {count}</span>
      <div className="contadorBotones">
        <button className="boton" onClick={sumar}>+</button>
        <button className="boton" onClick={restar}>-</button>        
      </div>
      <div>
        <span  className="contadorValor">En Stock: {stock - count} </span>
      </div>      
    </div>
  );
}

export {ItemCount}