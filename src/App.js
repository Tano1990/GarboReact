//import logo from './logo.svg';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar.jsx';
function App() {
  return (
    <div>
      <Navbar/>
      <ItemListContainer greeting="Bienvenidos a GARBO"/>
    </div>
  );
}

export default App;
