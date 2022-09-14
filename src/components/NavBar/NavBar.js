import  CartWidget  from "../CartWidget/CartWidget.js";
import { Link } from "react-router-dom";

const NavBar = (props) => {
    return (
        <div className="header-nav">
                    <div>
                        <nav>
                            <ul className="header-nav-lista" id="menu">
                                <Link className="header-nav-link" to={`/category/Malbec`}>Malbec</Link>
                                <Link className="header-nav-link" to={`/category/Cabernet`}>Cabernet</Link>
                                <Link className="header-nav-link" to={`/category/Rosado`}>Rosado</Link>
                                <li className="header-nav-link header-nav-link-close">
                                    <Link to={`/`}> 
                                        {<i className="fa-solid fa-xmark carrito"></i>}
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                        <div className="header-menu">
                            <img className="header-menu-logo" src={`img/menuMovilB.png`} alt="Logo menu mobile"></img>
                        </div>
                    </div>
                    <div className="header-nav-order">
                        <Link to={`/`}> 
                            <img className="header-logo" src={'img/Cosecha402.png'} alt="Logo Cosecha40"></img>
                        </Link>
                    </div>
                    <div>
                        <Link to={`/cart`}> 
                            <CartWidget/>
                        </Link>
                    </div>
                    </div>
    )
}

export default NavBar;
