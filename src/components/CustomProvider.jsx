import { Children, useState } from "react";
import { Provider } from "./CartContext";

export default function CustomProvider ({children}){

    const [carrito, setCarrito] = useState([])
    const [cartCount, setCartCount] = useState(0)

    function meterProductoEnCarrito(xp, xc){
        let existe = carrito.findIndex ((f)=> f.item.id == xp.item.id)
        if (existe == -1){
            carrito.push (xp)
            setCarrito (carrito)
        }else{
            carrito[existe].qty = carrito [existe].qty+xc
            setCarrito (carrito)
        }
        setCartCount (cartCount + xc)
    }
    
    return (
        <>
            <Provider value={{carrito, cartCount, setCartCount, setCarrito, meterProductoEnCarrito}}>
                {children}
            </Provider>
        </>
    )

}