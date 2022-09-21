import { useEffect, useState } from "react"
import { CartContext } from "./CartContext"



const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

useEffect(()=>{
    console.log(cart);
},[cart])

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

//Creo la función para vaciar el carrito completo
const clearCarrito = () => {
    setCart([]);
}


  return (
    <CartContext.Provider value={{cart, addCarrito}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider