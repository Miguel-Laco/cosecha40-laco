import  CartWidget  from "../CartWidget/CartWidget.js";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import {useContext, useState } from "react";



const NavBar = (props) => {
    //traigo el cart, para mostrar condicionalmente el CartWidget
    const {cart} = useContext(CartContext) 
    const [menu, setMenu] = useState(true);

    const handleClick = () => {
        setMenu(current => !current);
    }
    const menuID = menu ? `menu` : `menu2`;

    return (
        <div className="header-nav">
                    <div>
                        <nav>
                            <ul className="header-nav-lista" id={menuID} >
                                <Link className="header-nav-link" to={`/category/Malbec`}>Malbec</Link>
                                <Link className="header-nav-link" to={`/category/Cabernet`}>Cabernet</Link>
                                <Link className="header-nav-link" to={`/category/Rosado`}>Rosado</Link>
                                <li className="header-nav-link header-nav-link-close" onClick={handleClick}>
                                    {<i className="fa-solid fa-xmark carrito"></i>}
                                </li>
                            </ul>
                        </nav>
                        <div className="header-menu">
                            <img className="header-menu-logo" src={`img/menuMovilB.png`} alt="Logo menu mobile" onClick={handleClick}></img>
                        </div>
                    </div>
                    <div className="header-nav-order">
                        <Link to={`/`}> 
                            <img className="header-logo" src={'img/Cosecha402.png'} alt="Logo Cosecha40"></img>
                        </Link>
                    </div>
                    <div>
                        {cart.length !== 0 ? 
                        <Link to={`/cart`}> 
                            <CartWidget/>
                        </Link>
                        : null }
                    </div>
                    </div>
    )
}

export default NavBar;
