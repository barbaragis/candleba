import { useState } from "react";
import "../ItemCount/ItemCount.css"
import { BsCart3} from "react-icons/bs" ;

export const ItemCount = ({stock = 0 , onAdd}) =>{

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
            <div className="cantidad">
            { stock ? (
                <>
                    <div>
                        <button className="cantidad__menos" onClick={() => restar() }> - </button>
                        <span className="cantidad__numero"> {count} </span>
                        <button className="cantidad__mas" onClick={() => sumar ()} disabled={count > (stock -1)} > + </button>
                    </div>
                    <button className="agregar fs-8" disabled={stock === 0} onClick={() => {onAdd(count); setCount(1) }} >  
                    <BsCart3> </BsCart3> AGREGAR  </button>
                </>
            ) : (
                <h1> Sin stock</h1>
            )}
            </div> 
    );
}