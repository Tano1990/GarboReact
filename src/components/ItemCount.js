import { useState } from "react";
import React from "react"
import "./ItemCount.css"
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
    return(
        <div>      
            <p>Shampoo Solido</p>
            <button onClick={menos}>-</button>
            <input type="text" value={Count} className="text-center"/>
            <button onClick={mas}>+</button>
            <div><button className="añadir">Añadir al Carrito</button></div>    
        </div>
    )
}
