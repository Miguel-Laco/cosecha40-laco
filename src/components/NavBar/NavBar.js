import  CartWidget  from "../CartWidget/CartWidget.js";

const NavBar = (props) => {
    return (
        <div className="header-nav">
                    <div>
                        <nav>
                            <ul className="header-nav-lista" id="menu">
                                <li className="header-nav-link"><a href="#menu">Menu</a></li>
                                <li className="header-nav-link"><a href="#contacto">Contacto</a></li>
                                <li className="header-nav-link header-nav-link-close">
                                    <a href="#"> 
                                        <img className="header-img-close" src={require('../../img/close.png')} alt="icono cierre"></img>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <a href="#menu" className="header-menu">
                            <img className="header-menu-logo" src={require('../../img/menuMovil.png')} alt="Logo menu mobile"></img>
                        </a>
                    </div>
                    <div className="header-nav-order">
                        <a href="./index.html"> 
                            <img className="header-logo" src={require('../../img/Cosecha401.png')} alt="Logo Cosecha40"></img>
                        </a>
                    </div>
                    <div>
                        <a type="button"> 
                            <CartWidget/>
                        </a>
                    </div>
                    </div>
    )
}

export default NavBar;
