import Item from "../Item/Item"
import "./ItemList.css"


const ItemList = ({lista}) => {
    return (
    <div className="productos">
        {
        lista.map((product) => (
            <Item key={product.id} id={product.id} title={product.title} category={product.category} precio={product.precio} img={product.img} bodega={product.bodega} />
        ))
        }
    </div>
)
}

export default ItemList