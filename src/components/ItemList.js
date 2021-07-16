import React from "react"
import Item from "./Item";
import { useEffect,useState } from "react";
export default function ItemList(){
    const [products,setProducts]=useState([])
    const getProducts = async () =>{
        let config={
            method:'GET',
            cache: 'default',
            headers:{
                'Content-Type': 'aplication/json'
            }
        }
        let llamada = fetch(`http://localhost:4000/Products`,config);
        llamada = await llamada;
        llamada = await llamada.text();
        llamada = JSON.parse(llamada);
        setProducts(llamada);
    }
useEffect(()=>{
    getProducts()
},[])
    return(
            <div>{products.map((p)=>{
                console.log(p)
                return(
                    <Item id={p.id} price={p.price}/>
                )
        })}</div>
    )
}

