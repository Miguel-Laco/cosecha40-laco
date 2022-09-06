import "./Item.css"

const Item = ({title, precio, img, description, bodega}) => {
  return (
    <div className="producto-Tarjeta">
          <img className="producto-Imagen" width={`100px`} src={img} alt={title}/>
          <h2 className="producto-Titulo">{title}</h2>
          <h3 className="producto-Descripcion">{description}</h3>
          <div className="producto-Footer">
            <h3 className="producto-Precio">${precio}</h3>
            <button className="producto-Boton">Comprar</button>
          </div>
          <span className="producto-Bodega">{bodega}</span>
      </div>
  )
}

export default Item;