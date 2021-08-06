import React from "react"
import { useState } from "react"; 

export default function ItemsTotal(c){

    const [Count,setCount]=useState(1);
     
    
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
}
return(
    <div>      
        <button onClick={menos}>-</button>
        <input readOnly={true} type="text" value={Count} className="text-center"/>
        <button onClick={mas}>+</button>   
    </div>
)
