import "./cartwidget.css";
import Badge from 'react-bootstrap/Badge';
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";


const CartWidget = () => {

  const {cart} = useContext(CartContext)

  return (
    <div>
      <i className="fa-solid fa-cart-shopping carrito"></i>
      <Badge bg="warning">{cart.reduce((acc, prod) => acc + prod.cantidad, 0)}</Badge>
    </div>
  )
}

export default CartWidget;