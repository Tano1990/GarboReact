import React from "react"
import Detail from "./Detail"
import { useEffect,useState } from "react";
import { useParams } from "react-router";
export default function ItemDetailContainer(){
    const [itemDetail,setItemDetail]=useState([])
    const {id}=useParams()
    const getItemDetail = async () =>{
        let config={
            method:'GET',
            cache: 'default',
            headers:{
                'Content-Type': 'aplication/json'
            }
        }
        let llamada = fetch(`http://localhost:4000/product/${id}`,config);
        llamada = await llamada;
        llamada = await llamada.text();
        llamada = JSON.parse(llamada);
        setItemDetail(llamada);
    }
    const simularBd = () =>{ 
    let promesa= new Promise((response) => {
        setTimeout(() => {
            response(getItemDetail());
        }, 2000);
    });
    }
useEffect(()=>{
    simularBd()
},[])
    return(
            <div>
                {itemDetail.map ((e)=>(
                    <Detail itemDetail={e}/>
                ))
                }
            </div>
    )
}
