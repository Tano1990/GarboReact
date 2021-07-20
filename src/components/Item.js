import React from "react"
import ItemCount from "./ItemCount"
export default function Item(props){
    console.log("soy las props de Item",props)
    return(
        <div className="contenedor">
            <h1 className="titulo">{props.id}</h1>
            <h2>{props.price}</h2>
            <img src={props.image} className="foto" alt="" />
            <ItemCount stock={props.stock} ></ItemCount>
        </div>
    )
}