import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { data } from "../mockData";


const ItemDetailContainer = () => {
    
  const [producto, setPoducto] = useState({});
  const {id} = useParams();

  
  useEffect(() => {
    getItem
    .then((response)=> {setPoducto(response.find(prod => prod.id === id))

  })
    .catch((error)=>console.log(error))
  }, [id])

const getItem = new Promise((resolve, reject) => {
  setTimeout(()=> {
    resolve(data);}, 1000)
  });

  return (
    <>
      {producto && <ItemDetail  producto={producto}/>}
    </>
  )
}

export default ItemDetailContainer