//import logo from './logo.svg';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Navbar from './components/Navbar.jsx';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App(){
  return (
    <BrowserRouter>
        <Navbar/>
        <ItemListContainer greeting="Bienvenidos a GARBO"/>
        <ItemDetailContainer/>
    </BrowserRouter>
  );
}

export default App;
