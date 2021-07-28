import React from "react"
import ItemCount from "./ItemCount"
import ItemDetailContainer from "./ItemDetailContainer"
import {Link} from "react-router-dom"
export default function Item(props){
    
    function añadirCarrito (cantidadSeleccionada){
        alert("Añadiste " + cantidadSeleccionada + " productos al carrito")
    }
    return(
        <div className="contenedor">
            <h1 className="titulo">{props.id}</h1>
            <h2>{props.price}</h2>
            <Link to={`/Producto/Detalle/${props.id}`}><img src={props.image} className="foto" alt=""/></Link>
        </div>
    )
}