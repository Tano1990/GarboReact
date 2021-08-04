import React from "react"
import "./ItemCount.css"
import Detail from "./Detail";
import { useState } from "react"; 
import { useContext } from "react"; 
import cartContext from "./CartContext";

export default function ItemCount(retrieve){

    const [Count,setCount]=useState(1);
     
    const {carrito, setCarrito, cartCount, setCartCount} = useContext(cartContext);
    
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
        setCartCount (cartCount + Count)
        let itemQty = {item:retrieve.itemDetail, qty:Count}
        let existe = carrito.findIndex ((f)=> f.item.id == retrieve.itemDetail.id)
        if (existe == -1){
            carrito.push (itemQty)
            setCarrito (carrito)
        }else{
            carrito[existe].qty = carrito [existe].qty+Count
            setCarrito (carrito)
        }
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
