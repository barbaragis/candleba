
import { useEffect } from "react";
import { useCartContext } from "../../state/CartContext";
import "../Carrito/Carrito.css";
import { FiTrash2} from "react-icons/fi" 

export const Carrito = () =>{
    const {carrito , vaciarCarrito , borrarProducto} = useCartContext();
    useEffect(() =>{
        console.log({carrito})
    }, [carrito]);

    return(
        <div >
                        {carrito.length ? (
            <>
            <h2> Carrito </h2> 
            <div className="carrito__etiquetas">
                <div className="carrito__etiqueta"> Precio </div>
                <div className="carrito__etiqueta"> Cantidad </div>
                <div className="carrito__etiqueta"> Total </div>
            </div>
            {carrito.map((item) =>(
                <div className="carrito " key={item.id} onClick={() => borrarProducto (item.id)}>
                    <img  src={item.img} className="carrito__imagen" alt="..."/>
                    <div className=" carrito__titulo">
                        <h2 > {item.title} </h2>
                        <p>{item.category} </p>
                    </div>
                    <div className="carrito__titulo">
                        <span> $ {item.price}</span> 
                    </div>
                    <div className="carrito__titulo">
                        <span> {item.cantidad}</span>
                    </div>
                    <div className="carrito__titulo">
                        <p > $ {item.price * item.cantidad}</p>
                    </div>
                     <button onClick={borrarProducto} > <FiTrash2 /> </button>
                </div>
            ))}
            <div>
                <button className="carrito__vaciar" onClick={vaciarCarrito}> Vaciar carrito </button>
                <button> Checkout </button>
            </div>
            </> 
            ) : (
                <h1> Tu carrito está vacio </h1>
            )}
        </div>
        )
}