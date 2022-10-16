import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loader from "../Loader/Loader";
import {getFirestore, doc, getDoc} from "firebase/firestore";

const ItemDetailContainer = () => {
    
  const [producto, setPoducto] = useState({});
  const {id} = useParams();
  const db = getFirestore();
  const [load, setLoad] = useState(false);

  useEffect(() => {
    getItem()
  }, [id])

  const getItem = () => {
    const queryDoc = doc(db, `items`,id);
      getDoc(queryDoc)
        .then((res) => {
        setPoducto({id: res.id, ...res.data()});
        setLoad(true);
        })
    };

  return (
    <>
      {producto && 
      load === false
      ? <Loader/>
      : <ItemDetail  producto={producto}/>}
    </>
  )
}

export default ItemDetailContainer