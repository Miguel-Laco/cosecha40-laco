import "./ItemDetail.css"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { ItemCount } from "../ItemCount/ItemCount";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";


const ItemDetail = ({producto}) => {

const [count, setCount] = useState(0);
const [render, setRender] = useState(false)
const {addCarrito, cart} = useContext(CartContext)

useEffect(()=>{
  setTimeout(()=>{
    count != 0 && addCarrito(producto, count, (producto.stock - count))
  }, 100)
},[render])




//Esta función tendrá toda la lógica para enviar al carrito del desafío n°10
//Por ahora, solo cambio el estado de ItemDetail con lo que recibe de ItemCount
const agregar = (cantidad) => {
  setCount(cantidad);
    setRender(true);
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
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star "></i>
                <i className="fa fa-star grey"></i>
              </span>
      </div>
      <div className="product-properties">
      <span className="product-size">
          <Splide  aria-label="My Favorite Images" options={ {
          rewind: false,
          type: `loop`,
          width : 250,
          gap   : '1rem',
          autoplay: true,
          perPage: 1,
          arrows: false,
          interval: 2000,
        } }>
            <SplideSlide>
              <img src={producto.maridaje1} alt="Ternera"/>
            </SplideSlide>
            <SplideSlide>
              <img src={producto.maridaje2} alt="Aves"/>
            </SplideSlide>
          </Splide>
              </span>
        <span className="product-price">
                $<b>{producto.precio}</b>
              </span>
      </div>
      {!render && <ItemCount stock={producto.stock} agregar={agregar}/>}
      {render && <div className="botonesFinales">
      <Link to={`/cart`}><button className="boton">Terminar Compra</button></Link>
      <Link to={`/`}><button className="boton">Seguir Comprando</button></Link>
      </div>}
    </div>
  </div>
</div>


  )
}

export default ItemDetail