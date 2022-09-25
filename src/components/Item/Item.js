import "./Item.css"
import { Link } from "react-router-dom";


const Item = ({id, title, precio, img, category, bodega}) => {
  return (
    <div className="producto-Tarjeta">
          <img className="producto-Imagen" width={`70px`} height={`265px`} src={img} alt={title}/>
          <h2 className="producto-Titulo">{title}</h2>
          <h3 className="producto-Descripcion">{category}</h3>
          <div className="producto-Footer">
            <h3 className="producto-Precio">${precio}</h3>
            <Link className="producto-Boton" to={`/item/${id}`}>+ Info</Link>
          </div>
          <span className="producto-Bodega">{bodega}</span>
      </div>
  )
}

export default Item;