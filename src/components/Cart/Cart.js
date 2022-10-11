import "./Cart.css"
import {useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import moment from 'moment';
import {collection, addDoc, getFirestore } from "firebase/firestore";

const Cart = () => {

const {cart, clearCarrito, deleteCarrito} = useContext(CartContext)
const [total, setTotal] = useState("0")
const [actualizar, setActualizar] = useState(false)
const [values, setValues] = useState({
  name: "",
  phone: "",
  email: "",
});

const createOrder = () =>{
  const db = getFirestore();
  const order = {
    buyer: {
      name: `${values.name}`,
      phone: `${values.phone}`,
      email: `${values.email}`
    },
    items: cart, 
    total: total,
    date: moment().format(),
  }
  const query = collection(db, `orders`);
  addDoc(query, order)
  .then(({id}) => {
    toast (`Felicidades ${values.name}!
    El ID de tu compra es ${id}`, {
      icon: "🍷",
      style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
      },
    })
  })
  .catch(()=> toast.error(`Tu compra no pudo ser completada, intentalo más tarde`))
}

useEffect(()=>{
setTotal((cart.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0)))
},[actualizar])

const eliminarUno = (id) =>{
  deleteCarrito(id);
  !actualizar ? setActualizar(true) : setActualizar(false)
}

const eliminarTodo = () => {
  clearCarrito()
  !actualizar ? setActualizar(true) : setActualizar(false)
}

  const buy = (event) => {
    // Previene el comportamiento default de loformularios el cual recarga el sitio
    event.preventDefault();
    if (!values.name || !values.email || !values.phone) {
      toast.error("complete los campos");
    }else {
      createOrder();
      eliminarTodo(); 
    }    
  }

  const handleChange = (event) =>{
    const { target } = event;
    const { name, value } = target;
    /*
      Este snippet:
      1. Clona el estado actual
      2. Reemplaza solo el valor del input que ejecutó el evento
    */
    const newValues = {
      ...values,
      [name]: value,
    };
    // Sincroniza el estado de nuevo
    setValues(newValues);
  }


  return (
    <div className="carrito-Tarjeta">
      <Toaster position="top-right" reverseOrder={false} />
        <div className="carrito-Body">
        <h1>Carrito de compras</h1>
        {cart.map((item)=> (
            <div className="carrito-Producto" key={item.id}>
                <img className="carrito-Imagen" width={`70px`} height={`265px`} src={item.img} alt={item.title}/>
                <div className="carrito-Info">
              <div className="carrito-Divisor">
                  <img className="carrito-Icono" src={`img/datos/botella_b.png`}/>
                <h2 className="carrito-Titulo">{item.title}</h2>
              </div>
              <div className="carrito-Divisor">
                  <img className="carrito-Icono" src={`img/datos/uvas_b.png`}/>
                <h3 className="carrito-Descripcion">{item.category}</h3>
              </div>
              <div className="carrito-Divisor">
                  <img className="carrito-Icono" src={`img/datos/vino_b.png`}/>
                <span className="carrito-Bodega">{item.bodega}</span>
              </div>
            </div>
                <div className="carrito-Footer">
                    <div className="carrito-Cantidad">{item.cantidad}</div>
                    <h3 className="carrito-Precio">${item.precio}<span className="badge-2"> <br/>/ unidad</span></h3>
                    <button className="carrito-Boton" onClick={() => (eliminarUno(item.id))}>quitar</button>
                </div>
            </div>
        ))} 
        {cart.length === 0 ? (
        <>
          <h2 className="carrito-Mensaje">No hay productos en tu carrito</h2>
          <Link to={`/`} className="carrito-Boton">Volver a comprar</Link>
        </> ) : 
        <>
          <div className="carrito-Total">TOTAL : ${total}.-</div>
          <button className="carrito-Boton" onClick={eliminarTodo} >Vaciar Carrito</button>
          
            <form className="form" onSubmit={buy}>
            <label htmlFor="name">Nombre</label>
              <input
                id="name"
                name="name"
                type="name"
                value={values.name}
                onChange={handleChange}
              />
              <label htmlFor="email">Correo</label>
              <input
                id="email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
            />
              <label htmlFor="phone">Teléfono</label>
              <input
                id="phone"
                name="phone"
                type="number"
                value={values.phone}
                onChange={handleChange}
            />
            <br/>
              <button className="carrito-Boton" type="submit">Crear orden</button>
            </form>
          </>}
        
        </div>
    </div>
  )
}

export default Cart