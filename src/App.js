import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import "./components/NavBar/navbar.css";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <video className="Video" src="img/barricahd.mp4" autoPlay muted/> 
    <NavBar/>
    <ItemListContainer greeting="Bienvenido"/>
    <ItemDetailContainer/>
    </div>
  );
}

export default App;
