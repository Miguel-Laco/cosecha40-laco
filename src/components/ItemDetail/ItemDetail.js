import "./ItemDetail.css"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { ItemCount } from "../ItemCount/ItemCount";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";


const ItemDetail = ({producto}) => {

const [count, setCount] = useState(0); //Genero un estado para almacenar la cantidad seleccionada en ItemCount
const [cargar, setCargar] = useState(false) //Genero un estado para condicionar la carga de mi carrito.
const [mostrar, setMostrar] = useState(false) //Genero un estado para renderizar condicionalmente
const {addCarrito} = useContext(CartContext) //Importo mi función global para agregar al carrito


//Genero este useEffect, para enviar el producto, la cantidad y el stock restante
useEffect(()=>{
  setTimeout(()=>{
    count != 0 && addCarrito(producto, count, (producto.stock - count))
  }, 100)
},[cargar])


const agregar = (cantidad) => {
  setCount(cantidad); //Almaceno la cantidad seleccionada por el usuario
  setMostrar(true); //Renderizo condicionalmente los botones para seguir comprando, más o terminar
  cargar ? setCargar(false) : setCargar(true) //Cambio el estado, para ejecutar el useEffect
}

  return(
  <div className="container">
  <div className="card">
    <div className="card-head">
      <img src={producto.img} alt="Shoe" className="product-img"></img>
      <div className="product-detail">
        <h2>{producto.bodega}</h2>
        <div className="product-detail-bodega">{producto.info}</div> 
      </div>
    </div>
    <div className="card-body">
      <div className="product-desc">
        <span className="product-title">{producto.title}</span>
        <span className="product-caption">{producto.category}</span>
        <span className="product-rating">
          {Array.from(
              { length: producto.estrellas },
              (_, i) => (
                <i className="fa fa-star" key={i}></i>
              )
          )}
        </span>
      </div>
      <div className="product-properties">
      <span className="product-size">
          <Splide  aria-label="My Favorite Images" options={ {
          rewind: false,
          type: `loop`,
          width : 250,
          gap   : '2px',
          autoplay: true,
          perPage: 1,
          arrows: false,
          interval: 1500,
        } }>
            <SplideSlide>
              <img src={producto.maridaje1} alt="maridaje"/>
            </SplideSlide>
            <SplideSlide>
              <img src={producto.maridaje2} alt="maridaje"/>
            </SplideSlide>
            <SplideSlide>
              <img src={producto.maridaje3} alt="maridaje"/>
            </SplideSlide>
          </Splide>
              </span>
        <span className="product-price">
                $<b>{producto.precio}</b>
              </span>
      </div>
      {/* Muestro u Oculto condicionalmente el ItemCount */}
      {!mostrar && <ItemCount stock={producto.stock - count} agregar={agregar}/>}
      {/* Muestro u Oculto condicionalmente botones adicionales */}
      {mostrar && <div className="botonesFinales">
      <Link to={`/cart`}><button className="boton">Terminar mi Compra</button></Link>
      <Link to={`/`}><button className="boton">Seguir Comprando</button></Link>
      <button onClick={()=>{setMostrar(false)}} className="boton">Agregar más</button>
      </div>}
    </div>
  </div>
</div>
)
}

export default ItemDetail