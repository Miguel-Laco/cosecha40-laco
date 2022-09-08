import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail";
import { data } from "../mockData";


const ItemDetailContainer = () => {
    
  const [producto, setPoducto] = useState([]);

  useEffect(() => {
    getItem
    .then((response)=> {setPoducto(response.find(prod => prod.id === "3"))
  })
    .catch((error)=>console.log(error))
  }, [])

const getItem = new Promise((resolve, reject) => {
  setTimeout(()=> {
    resolve(data);}, 2000)
  });

  return (
    <>
      <ItemDetail item={producto}/>
    </>
  )
}

export default ItemDetailContainer