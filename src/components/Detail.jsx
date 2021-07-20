import React from "react"
export default function Detail(props){
    return(
        <div>
            <h1>{props.item.title}</h1>
            <h2>{props.item.descripcion}</h2>
            <img src={props.item.image}/>
            <h4>${props.item.price}</h4>
        </div>
    )
}