import React from "react"
import { useState } from "react"
import ItemCount from "./ItemCount"
import { Link } from "react-router-dom"
export default function Detail(props){
   
    const [show,setShow] = useState(false)
    const [hide,setHide] = useState(true) 
    function añadirCarrito (cantidadSeleccionada){
        alert("Añadiste " + cantidadSeleccionada + " productos al carrito")
    }
    return(
        
        <div>
            <h1>{props.itemDetail.title}</h1>
            <h2>{props.itemDetail.descripcion}</h2>
            <img src={props.itemDetail.image}/>
            <h4>${props.itemDetail.price}</h4>
            {hide ? <ItemCount stock={props.itemDetail.stock} setShow={setShow} setHide={setHide} onAdd={añadirCarrito}/> : null}
            {show ? <button><Link to="/Carrito">TERMINAR COMPRA</Link></button> : null }
            
        </div>
    )
}