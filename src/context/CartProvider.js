import { useState } from "react";
import { CartContext } from "./CartContext";
import toast, { Toaster } from 'react-hot-toast';


const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

//Creo una función que agrega al carrito el producto, actualizando el stock y agregando cantidad
const addCarrito = (item, cantidad, stock) => {
    const existe = cart.find ((elemento) => elemento.id === item.id);
    if (existe) {
        if (existe.stock < cantidad){
            toast (`Actualmente nos quedan ${existe.stock} botellas de nuestro stock, porque ${existe.cantidad}, estan en tu carrito`, {
                icon: "🍷",
                style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
                },
            })
        }else {
            existe.cantidad = existe.cantidad + cantidad;
            existe.stock = existe.stock - cantidad;
            setCart([...cart]);}
    }else{
        setCart([...cart, {...item, cantidad, stock}]);
        toast (`Agregamos ${cantidad}, ${item.title}`, {
            icon: "🍷",
            style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
            },
        })
    }
}

const deleteCarrito = (prodId) => {
    setCart(cart.filter((prod)=> prod.id !== prodId))
}

//Creo la función para vaciar el carrito completo
const clearCarrito = () => {
    setCart([]);
}


  return (
    <CartContext.Provider value={{cart, addCarrito, clearCarrito, deleteCarrito}}>
        <Toaster position="top-right" reverseOrder={false} />
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider