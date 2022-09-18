import "./ItemDetail.css"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { ItemCount } from "../ItemCount/ItemCount";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";



const ItemDetail = ({id, title, stock, precio, img, category, bodega, info, maridaje1, maridaje2}) => {

const [count, setCount] = useState(0);
const [render, setRender] = useState(false)

useEffect(() => {

  return () => {
  console.log(count);
  }
}, [count])

//Agregar al Carrito
const agregar = () => {
  if (count != 0) {
    setRender(true)
    //Logica para agregar al CartContext el resultado de "count"
  }
  
}

  return(
  <div className="container">
  <div className="card">
    <div className="card-head">
      <img src={img} alt="Shoe" className="product-img"></img>
      <div className="product-detail">
        <h2>{bodega}</h2>
        <div className="product-detail-bodega">{info}</div> 
      </div>
    </div>
    <div className="card-body">
      <div className="product-desc">
        <span className="product-title">{title}</span>
        <span className="product-caption">{category}</span>
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
              <img src={maridaje1} alt="Ternera"/>
            </SplideSlide>
            <SplideSlide>
              <img src={maridaje2} alt="Aves"/>
            </SplideSlide>
          </Splide>
              </span>
        <span className="product-price">
                $<b>{precio}</b>
              </span>
      </div>
      {!render && <div>
          <ItemCount stock={stock} setCount={setCount} count={count}/>
          <button className="irAlCarrito" onClick={agregar}>Agregar a carrito</button>
      </div>}
      
      {render && <div>
      <Link to={`/cart`}><button className="irAlCarrito">Terminar Compra</button></Link>
      <Link to={`/`}><button className="irAlCarrito">Seguir Comprando</button></Link>
      </div>}

    </div>
  </div>
</div>


  )
}

export default ItemDetail