const NavBar = () => {
    return (
        <div className="row header-nav">
                    <div className="col-auto">
                        <nav>
                            <ul className="header-nav-lista" id="menu">
                                <li className="header-nav-link"><a href="#menu">Menu</a></li>
                                <li className="header-nav-link header-nav-link-close">
                                    <a href="#"> 
                                        <img className="header-img-close" src={require("../img/close-icon-negro.png")} alt="icono cierre"></img>
                                    </a>
                                </li>
                                <li className="header-nav-link"><a href="#contacto">Contacto</a></li>
                            </ul>
                        </nav>
                        <a href="#menu" className="header-menu">
                            <img className="header-menu-logo" src={require("../img/menu-movil.jpg")} alt="Logo menu mobile"></img>
                        </a>
                    </div>
                    <div className="col-auto header-nav-order">
                        <a href="./index.html"> 
                            <img className="header-logo" src={require("../img/Cosecha40-logo-01.png")} alt="Logo Cosecha40"></img>
                        </a>
                    </div>
                    <div className="col-auto">
                        <a type="button" data-bs-toggle="modal" data-bs-target="#modalCarrito"> 
                            <img className="header-carrito" src={require("../img/carrito-compras.png")} alt="Carrito de Compra"></img>
                        </a>
                    </div>
                    </div>
    )
}

export default NavBar;
