import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail";
import { data } from "../mockData";


const ItemDetailContainer = () => {
    
  const [producto, setPoducto] = useState([]);



const getItem = new Promise((resolve, reject) => {
  setTimeout(()=> {
    resolve(data);
  }, 2000)
  });

  return (
    <div className="nuevoProducto">
        {
            useEffect(() => {
              getItem
              .then((response)=> {setPoducto(response)})
              .then(<ItemDetail item={producto}/>)
              .catch((error)=>console.log(error))
            }, [])
          
        }
    </div>
  )
}

export default ItemDetailContainer