import React from "react"
export default function Detail(props){
    return(
        <div>
            <h1>{props.itemDetail.title}</h1>
            <h2>{props.itemDetail.descripcion}</h2>
            <img src={props.itemDetail.image}/>
            <h4>${props.itemDetail.price}</h4>
        </div>
    )
}