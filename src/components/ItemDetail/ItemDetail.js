import "./ItemDetail.css"


const ItemDetail = ({item}) => {
  console.log(item);
  return(
<div className="producto-Tarjeta-duplicado">
          <img className="producto-Imagen-duplicado" width={`70px`} src={item.img} alt={item.title}/>
          <h2 className="producto-Titulo-duplicado">{item.title}</h2>
          <h3 className="producto-Descripcion-duplicado">{item.description}</h3>
          <div className="producto-Footer-duplicado">
            <h3 className="producto-Precio-duplicado">${item.precio}</h3>
            <button className="producto-Boton-duplicado">Comprar</button>
          </div>
          <span className="producto-Bodega-duplicado">{item.bodega}</span>
      </div>
    
  )
}

export default ItemDetail