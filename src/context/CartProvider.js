import { useEffect, useState } from "react"
import { CartContext } from "./CartContext"



const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

useEffect(()=>{
    console.log(cart);
},[cart])


const addCarrito = (item, cantidad, stock) => {
    const existe = cart.find ((elemento) => elemento.item.id === item.id);
    if (existe) {
        existe.cantidad = existe.cantidad + cantidad;
        existe.stock = existe.stock - cantidad;
        setCart([...cart]);
    }else{
        setCart([...cart, {item, cantidad, stock}]);
    }
}

const removeCarrito = (item) => {
    const nuevoArreglo = cart.filter((elemento)=>elemento.item !== item);
    setCart(nuevoArreglo);
}

const clearCarrito = () => {
    setCart([]);
}



  return (
    <CartContext.Provider value={{cart, addCarrito, removeCarrito, clearCarrito}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider