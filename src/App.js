//import logo from './logo.svg';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemCount from './components/ItemCount';
import Navbar from './components/Navbar.jsx';
function App(){
  return (
    <div>
      <Navbar/>
      <ItemListContainer greeting="Bienvenidos a GARBO"/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
