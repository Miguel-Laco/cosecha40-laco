import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { data } from "../mockData";


const ItemDetailContainer = () => {
    
  const [producto, setPoducto] = useState([]);
  const {id} = useParams();
console.log(id);
  
  useEffect(() => {
    getItem
    .then((response)=> {setPoducto(response.find(prod => prod.id === id))

  })
    .catch((error)=>console.log(error))
  }, [])

const getItem = new Promise((resolve, reject) => {
  setTimeout(()=> {
    resolve(data);}, 1000)
  });

  return (
    <>
      {producto && <ItemDetail  id={producto.id} maridaje={producto.maridaje} title={producto.title} category={producto.category} precio={producto.precio} img={producto.img} bodega={producto.bodega} info={producto.info}/>}
    </>
  )
}

export default ItemDetailContainer