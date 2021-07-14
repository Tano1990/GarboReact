//import logo from './logo.svg';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import Navbar from './components/Navbar.jsx';
function App(){
  return (
    <div>
      <Navbar/>
      <ItemListContainer greeting="Bienvenidos a GARBO"/>
      <ItemCount greeting="Shampoo Solido" stock={5}/>
    </div>
  );
}

export default App;
