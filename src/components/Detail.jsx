import React from "react"
import ItemCount from "./ItemCount"
export default function Detail(props){
    function añadirCarrito (cantidadSeleccionada){
        alert("Añadiste " + cantidadSeleccionada + " productos al carrito")
    }
    return(
        <div>
            <h1>{props.itemDetail.title}</h1>
            <h2>{props.itemDetail.descripcion}</h2>
            <img src={props.itemDetail.image}/>
            <h4>${props.itemDetail.price}</h4>
            <ItemCount stock={props.itemDetail.stock} onAdd={añadirCarrito} ></ItemCount>
        </div>
    )
}