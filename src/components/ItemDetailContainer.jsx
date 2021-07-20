import React from "react"
import Detail from "./Detail"
import { useEffect,useState } from "react";
export default function ItemDetailContainer(){
    const [item,setItem]=useState([])
    const getItem = async () =>{
        let config={
            method:'GET',
            cache: 'default',
            headers:{
                'Content-Type': 'aplication/json'
            }
        }
        let llamada = fetch(`http://localhost:4000/product/2`,config);
        llamada = await llamada;
        llamada = await llamada.text();
        llamada = JSON.parse(llamada);
        setItem(llamada);
    }
    const simularBd = () =>{ 
    let promesa= new Promise((response, reject) => {
        setTimeout(() => {
            response(getItem());
        }, 2000);
    });
    }
useEffect(()=>{
    simularBd()
},[])
    return(
            <div>
                {item.map ((e)=>(
                    <Detail item={e}/>
                ))
                }
            </div>
    )
}
