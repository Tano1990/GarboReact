import React from "react"
import ItemCount from "./ItemCount"
export default function Item(props){
    console.log("soy las props de Item",props)
    function añadirCarrito (cantidadSeleccionada){
        alert("Añadiste " + cantidadSeleccionada + " productos al carrito")
    }
    return(
        <div className="contenedor">
            <h1 className="titulo">{props.id}</h1>
            <h2>{props.price}</h2>
            <img src={props.image} className="foto" alt="" />
            <ItemCount stock={props.stock} onAdd={añadirCarrito} ></ItemCount>
        </div>
    )
}