import { useEffect } from "react";


const ItemDetail = ({ item }) => {
  console.log(item);
/* useEffect(()=> {
  getItem
  .then()
},[])

const getItem = new Promise (resolve => {
  resolve(item)
}) */
  return(
    useEffect(()=> {
      console.log(item);
      <div className="producto-Tarjeta">
        <h1>{item[1].title}</h1>
        <img src={item[1].img}/>
      </div>
    },[])
    
  )
}

export default ItemDetail