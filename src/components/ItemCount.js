import { useState } from "react";
import React from "react"
import "./ItemCount.css"
import { propTypes } from "react-bootstrap/esm/Image";
export default function ItemCount(retrieve){
    const [Count,setCount]=useState(1);
    const mas=()=>{
        if(Count<retrieve.stock){
        setCount(Count+1);
        }
    }
    const menos=()=>{
        if(Count!=1){
            setCount(Count-1);
        }
    }

    function añadir(){
        retrieve.setShow(true)
        retrieve.setHide(false)
        retrieve.onAdd(Count)
    }

    return(
        <div>      
            <button onClick={menos}>-</button>
            <input readOnly={true} type="text" value={Count} className="text-center"/>
            <button onClick={mas}>+</button>
            <div><button className="añadir" onClick={añadir}>Añadir al Carrito</button></div>    
        </div>
    )
}
