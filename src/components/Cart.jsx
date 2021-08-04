import React from "react"
import { useState } from "react"
import { useContext } from "react"
import cartContext from "./CartContext"
export default function Cart () { 

    const {carrito, setCarrito, setCartCount} = useContext(cartContext)
    const [precioTotal, setPrecioTotal] = useState (0)
    
    function vaciarCarrito(){   
    setCarrito([])
    setCartCount(0)
    }

    function removerProducto(id){ 
      let filtro= carrito.filter((x)=> x.item.id != id)
      setCarrito(filtro)
    }

    function precioFinal(){
      let total=0
      carrito.map ((pf)=>{
          total= total+pf.item.price*pf.qty
       }
     )
      setPrecioTotal(total)
    }

    return (
        <div>
          <div>
          {carrito.map ((i)=>(
              <p>
               <img className="Cartfoto" src={i.item.image}/>
               {i.item.title} ${i.item.price} x {i.qty} = {i.item.price*i.qty}
               <button onClick={()=>removerProducto(i.item.id)}>Remover Producto</button>
              </p>
          ))
          }

          </div>
          <button onClick={precioFinal}>calcula esta mierda</button>
          <h1>{precioTotal}</h1>
          <button onClick={vaciarCarrito}>Vaciar Carrito</button>
        </div>              
        )        
    }