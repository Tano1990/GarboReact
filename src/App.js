//import logo from './logo.svg';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Navbar from './components/Navbar.jsx';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Category from './components/Category'
import Envios from './components/Shipment'
import Contacto from './components/Contact';
import Carrito from './components/Cart';

function App(){
  return (
    <BrowserRouter>
         <Navbar/>
    <Switch>
    <Route path={'/'} exact component={Home}/>
    <Route path={'/Productos'} exact component={ItemListContainer}></Route>
    <Route path={'/Productos/:idCategoria'} exact component={Category}></Route>
    <Route path={'/Shipment'} exact component={Envios}></Route>
    <Route path={'/Contact'} exact component={Contacto}></Route>
    <Route path={'/Producto/Detalle/:id'} exact component={ItemDetailContainer}></Route>
    <Route path={'/Carrito'} exact component={Carrito}></Route>
    
    </Switch>  
    </BrowserRouter>
  );
}

export default App;
