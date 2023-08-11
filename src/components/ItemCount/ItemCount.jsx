import { useState } from "react";
import "../ItemCount/ItemCount.css"

export const ItemCount = ({stock , onAdd}) =>{

    const [count , setCount] = useState(1);

    const sumar = () =>{
        if (stock > count )
        setCount(count + 1)
    }

    const restar = () =>{
        if (count > 1 )
        setCount(count - 1)
    }


    return(
        <div>
            <div className="cantidad">
                <button className="cantidad__menos" onClick={() => restar() }> - </button>
                <span className="cantidad__numero"> {count} </span>
                <button className="cantidad__mas" onClick={() => sumar ()}> + </button>
            </div>
            <button className="agregar fs-8" disabled={!stock} onClick={() => onAdd(count)}> 
                AGREGAR AL CARRITO </button>
        </div>
    )
}