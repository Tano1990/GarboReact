//Funcion que muestra los objetos de la BD filtrados por CATEGORIA
import React from "react"
import "../App.css";
import Item from "./Item";
import { useRef } from "react";
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router"
export default function Category (){

    const [categorias,setCategorias]=useState([])
    let current=useRef (true)
    const {idCategoria}=useParams()
    const getCategorias = async () =>{
        let config={
            method:'GET',
            cache:'default',
            headers:{
                'Content-Type': 'aplication/json'
            }

        }
        let llamada = fetch (`http://localhost:4000/product/category/${idCategoria}`)
        llamada = await llamada;
        llamada = await llamada.text();
        llamada = JSON.parse(llamada);
        setCategorias(llamada);
    }
    const simularBd = () => {
        let promesa= new Promise((response) => {
            setTimeout (()=>{
                response(getCategorias());
            }, 2000);
        });
    }
    useEffect (()=>{
        if(current){
            simularBd()
            current=false
        }
    },[idCategoria])
        return (
        <div className="grilla">
          {categorias.map ((e,id) =>(
              <Item key={id} stock={e.stock} id={e.id} price={e.price} image={e.image}/>
          ) 
          )}
        </div>
        )

    }