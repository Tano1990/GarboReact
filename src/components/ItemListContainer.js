import React from "react"
import ItemList from "./ItemList"
export default function ItemListContainer(prop){
    return(
        <div> 
            <p className="text-success font-weight-bold" >{prop.greeting}</p>
            <ItemList/>
        </div>
    )
}