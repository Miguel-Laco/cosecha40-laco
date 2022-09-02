import "./ItemListContainer.css"
import { ItemCount } from "../ItemCount/ItemCount.js"


const ItemListContainer = ({greeting}) => {
  return (
    <div className="tittle">
      {greeting}
      <ItemCount stock={5} />
    </div>
  )
}

export default ItemListContainer