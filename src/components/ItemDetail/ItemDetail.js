import { useEffect, useState } from "react";
import "./ItemDetail.css"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { logDOM } from "@testing-library/react";

const ItemDetail = ({id, title, precio, img, category, bodega, info, maridaje}) => {

  const [comida, setComida] = useState([]);
  
  useEffect(()=> {
 getFood()
 .then((response)=> {setComida(response)})
 .then( console.log(getFood))
.catch((error)=>console.log(error))
  },[])

  const getFood = async () => {
    setComida({maridaje})
    await console.log(comida);
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
          rewind: true,
          width : 250,
          gap   : '1rem',
          autoplay: true,
          perPage: 1,
          arrows: false,
          interval: 2000,
        } }>
            <SplideSlide>
              <img src=""alt="Image 1"/>
            </SplideSlide>
            <SplideSlide>
              <img src="" alt="Image 2"/>
            </SplideSlide>
          </Splide>
              </span>
        <span className="product-price">
                $<b>{precio}</b>
              </span>
      </div>
    </div>
  </div>
</div>


  )
}

export default ItemDetail