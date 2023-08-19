
import { useEffect } from "react";
import { useCartContext } from "../../state/CartContext";
import "../Carrito/Carrito.css";
import { FiTrash2} from "react-icons/fi" 
import { Link } from "react-router-dom";

export const Carrito = () =>{
    const {carrito , vaciarCarrito , borrarProducto , totalCarrito} = useCartContext();
    useEffect(() =>{
        console.log({carrito})
    }, [carrito]);

    return(
        <div >
            {carrito.length ? (
            <>
            <h2 className="carrito__sub "> Carrito </h2> 
            <div className="carrito__etiquetas">
                <p >Producto</p>
                <p >Precio</p>
                <p >Cantidad</p>
                <p >Subtotal</p>
            </div>
            {carrito.map((item) =>(
                <div className="carrito" key={item.id} onClick={() => borrarProducto (item.id)}>
                    <div className="carrito__producto" >
                        <h2 > {item.title} </h2>
                        <img className="carrito__img" src={item.img}  />
                    </div>
                    <div className="carrito__precio"> 
                    <p> $ {item.price} </p> </div>
                    <div> 
                    <p> {item.cantidad} </p></div>
                    <div > 
                    <p>$ {item.price * item.cantidad} </p></div>
                    <div  className="carrito__borrar"   > 
                    <button onClick={borrarProducto} > <FiTrash2 /> </button>
                    </div>
                </div>
            ))}
            <div className="carrito__total ">
                <p className="text-center fs-6"> Total de su compra : $ {totalCarrito()} </p>
            </div>
            <div>
            </div>
            <div className="carrito__botones">
                <button className="carrito__vaciar" onClick={vaciarCarrito}> VACIAR CARRITO </button>
                <Link className="carrito__checkout" to={"/Formulario"} >
                    <button > CONFIRMAR PEDIDO </button>
                </Link>
            </div>
            
            </> 
            ) : (
                <>
                <h2 className="carrito__vacio"> Tu carrito está vacio </h2>
                <span className="carrito__sub"> Aún no tienen ningun item en tu carrito. </span>
                <Link className="text-secondary-emphasis" to={"/"} > Continuar comprando </Link>
                </>
            )}
        </div>
        )
}