import { useState } from "react"

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
            <div>
                <button  onClick={() => restar() }> - </button>
                <span> {count} </span>
                <button onClick={() => sumar ()}> + </button>
            </div>
            <button disabled={!stock} onClick={() => onAdd(count)}> Agregar al carrito </button>
        </div>
    )
}