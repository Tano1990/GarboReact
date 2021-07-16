import React from "react"
export default function Item(props){
    console.log("soy las props de Item",props)
    return(
        <div>
            <h1>{props.id}</h1>
            <h2>{props.price}</h2>
        </div>
    )
}