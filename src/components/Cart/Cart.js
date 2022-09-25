import "./Cart.css"
import {useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";


const Cart = () => {

const {cart, clearCarrito, deleteCarrito} = useContext(CartContext)

const [total, setTotal] = useState("0")
const [actualizar, setActualizar] = useState(false)

useEffect(()=>{
setTotal((cart.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0)))
},[actualizar])

const eliminarUno = (id) =>{
  deleteCarrito(id);
  !actualizar ? setActualizar(true) : setActualizar(false)
}

const eliminarTodo = () => {
  clearCarrito()
  !actualizar ? setActualizar(true) : setActualizar(false)
}

  return (
    <div className="carrito-Tarjeta">
        <div className="carrito-Body">
        <h1>Carrito de compras</h1>
        
        {cart.map((item)=> (
            <div className="carrito-Producto" key={item.id}>
                <img className="carrito-Imagen" width={`70px`} height={`265px`} src={item.img} alt={item.title}/>
                <div className="carrito-Info">
              <div className="carrito-Divisor">
                  <img className="carrito-Icono" src={`img/datos/botella.png`}/>
                <h2 className="carrito-Titulo">{item.title}</h2>
              </div>
              <div className="carrito-Divisor">
                  <img className="carrito-Icono" src={`img/datos/uva.png`}/>
                <h3 className="carrito-Descripcion">{item.category}</h3>
              </div>
              <div className="carrito-Divisor">
                  <img className="carrito-Icono" src={`img/datos/vino.png`}/>
                <span className="carrito-Bodega">{item.bodega}</span>
              </div>
            </div>
                <div className="carrito-Footer">
                    <div className="carrito-Cantidad">{item.cantidad}</div>
                    <h3 className="carrito-Precio">${item.precio}</h3>
                    <button className="carrito-Boton" onClick={() => (eliminarUno(item.id))}>quitar</button>
                </div>
            </div>
        ))}
        {/* <div className="carrito-Total">TOTAL</div> */}
        {cart.length === 0 ? (
        <>
          <h2 className="carrito-Mensaje">No hay productos en tu carrito</h2>
          <Link to={`/`} className="carrito-Boton">Volver a comprar</Link>
        </> ) : 
        <>
          <div className="carrito-Total">TOTAL : ${total}.-</div>
          <button className="carrito-Boton" onClick={eliminarTodo} >Vaciar Carrito</button>
        </>
        }
        
        
        </div>
    </div>
  )
}

export default Cart