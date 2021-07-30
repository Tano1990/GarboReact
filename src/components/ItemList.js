import React from "react"
import Item from "./Item";
import { useParams } from "react-router";
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
    const simularBd = () =>{ 
    let promesa= new Promise((response, reject) => {
        setTimeout(() => {
            response(getProducts());
        }, 2000);
    });
    }
useEffect(()=>{
    simularBd()
},[])
    return(
            <div className="grilla">{products.map((p,id)=>{
                return(
                    <Item key={id} stock={p.stock} id={p.id} price={p.price} image={p.image}/>
                )
        })}</div>
    )
}

