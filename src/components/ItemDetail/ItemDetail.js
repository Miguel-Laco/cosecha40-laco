import { useEffect } from "react";


const ItemDetail = ({item}) => {
  console.log(item);
  return(
      <div className="producto-Tarjeta">
        <h1>{item.title}</h1>
        <img src={item.img}/>
      </div>
    
  )
}

export default ItemDetail