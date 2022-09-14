import "./ItemListContainer.css"
import { ItemCount } from "../ItemCount/ItemCount.js"
import { data } from "../mockData"
import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"



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

  return (
    <div className="body">
      {greeting}
      <ItemCount stock={5} />
      <ItemList lista={productList}/>
    </div>
  )
}

export default ItemListContainer