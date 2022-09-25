import { useState } from "react"
import { CartContext } from "./CartContext"



const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);



//Creo una función que agrega al carrito el producto, actualizando el stock y agregando cantidad
const addCarrito = (item, cantidad, stock) => {
    const existe = cart.find ((elemento) => elemento.id === item.id);
    if (existe) {
        if (existe.stock < cantidad){
            alert (`Solo nos quedan en stock ${existe.stock}`)
        }else {
            existe.cantidad = existe.cantidad + cantidad;
            existe.stock = existe.stock - cantidad;
            setCart([...cart]);}
    }else{
        setCart([...cart, {...item, cantidad, stock}]);
    }
}

const deleteCarrito = (prodId) =>{
    const item = cart.findIndex((prod) => prod.id === prodId) 
    let nuevoArreglo = [];
    cart.forEach(prod=> {
        if (prod.id !== prodId){
            nuevoArreglo.push(prod)
        }
    })
    setCart(nuevoArreglo);
}

//Creo la función para vaciar el carrito completo
const clearCarrito = () => {
    setCart([]);
}


  return (
    <CartContext.Provider value={{cart, addCarrito, clearCarrito, deleteCarrito}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider