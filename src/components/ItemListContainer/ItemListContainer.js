import "./ItemListContainer.css"
import { data } from "../mockData"
import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { getFirestore, getDocs, collection } from "firebase/firestore"


const ItemListContainer = ({greeting}) => {

  const [productList, setProductList] = useState([]);
  const {categoryName} = useParams();



  useEffect(() => {
    getProducts
    .then((response)=>{filter(response)})
  }, [categoryName])
  
  const filter = (response) => {
    if (categoryName) {
      setProductList(response.filter((item)=>item.category == categoryName))

    }else {
      setProductList(data)
    }
  }
  
  const getProducts = new Promise((resolve, reject) => {
      setTimeout(()=> {
        resolve(data)}, 1000)
    });

    //Traigo la info de Firestore
    /* const getProducts = () =>{
      const db = getFirestore();
      const querySnapshot = collection(db, `items`);
      getDocs(querySnapshot)
      .then((response)=> {
        const data = response.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        })
        setProductList(data)
      })
      .catch((err)=> console.log(err))
    }
 */
  return (
    <div className="body">
      {greeting}
      <ItemList lista={productList}/>
    </div>
  )
}

export default ItemListContainer