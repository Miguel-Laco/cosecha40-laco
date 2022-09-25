import './App.css';
import NavBar from './components/NavBar/NavBar';
import "./components/NavBar/navbar.css";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CartProvider from './context/CartProvider';


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
      <video className="Video" src="img/videohd.mp4" autoPlay muted loop/> 
      <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryName' element={<ItemListContainer/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
