import React from "react"
import "./ItemCount.css"
import Detail from "./Detail";
import { useState } from "react"; 
import { useContext } from "react"; 
import cartContext from "./CartContext";

export default function ItemCount(retrieve){

    const [Count,setCount]=useState(1);
     
    const {carrito, setCarrito, cartCount, setCartCount, meterProductoEnCarrito} = useContext(cartContext);
    
    const mas=()=>{
        if(Count<retrieve.itemDetail.stock){
        setCount(Count+1);
        }
    }
    const menos=()=>{
        if(Count!=1){
            setCount(Count-1);
        }
    }

    function añadir(){
        retrieve.setContador(Count)
        retrieve.setShow(true)
        retrieve.setHide(false)
        retrieve.onAdd(Count)
        let itemQty = {item:retrieve.itemDetail, qty:Count}
        meterProductoEnCarrito(itemQty, Count)
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
