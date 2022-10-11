import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getFirestore, getDocs, collection, query, where } from "firebase/firestore";


const ItemListContainer = ({greeting}) => {

  const [productList, setProductList] = useState([]);
  const {categoryName} = useParams();

    useEffect(() => {
    getProducts()
  }, [categoryName])

    //Traigo la info de Firestore
    const getProducts = () =>{
      const db = getFirestore();
      const queryBase = collection(db, `items`);
      const querySnapshot = categoryName ? query(queryBase, where("category", "==", categoryName)) : queryBase;
      
        getDocs(querySnapshot)
          .then((response)=> {
          const data = response.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        })
        setProductList(data)
      }).catch((err)=> console.log(err))
    }

  return (
    <div className="body">
      {greeting}
      <ItemList lista={productList}/>
    </div>
  )
}

export default ItemListContainer