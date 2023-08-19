import { createContext, useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({children}) =>{
    const [carrito, setCarrito] = useState([]);

    const itemCarrito = (id) => carrito.find((producto) => producto.id === id);

    const agregarProducto = (item, cantidad) =>{
        const element = itemCarrito(item.id)

        if (!element) {
            return setCarrito ([...carrito , {...item , cantidad}]);
        }

        const actualizarCarrito = element.cantidad + cantidad;

            if (actualizarCarrito <= item.stock) {
                const nuevoCarrito = carrito.map ((producto) =>
                producto.id === item.id ? {...producto , cantidad: actualizarCarrito} : producto);
                setCarrito(nuevoCarrito);
            }else {
                toast.error('No hay más stock' , {
                    position: "top-center",
                    autoClose:1000,
                    hideProgressBar : true,
                    closeOnClick: true,
                    pauseOnHover : true,
                    draggable : true,
                    progress: undefined,
                })
            }
        }

    const borrarProducto = (id) =>{
        const carritoNuevo= carrito.filter((producto) => producto.id !== id);
        setCarrito(carritoNuevo);
    }

    const carritoCantidad = () => carrito.reduce((acc,item) => acc + item.cantidad, 0 );

    const vaciarCarrito = () => setCarrito([]);

    const totalCarrito = () => carrito.reduce((acc, item) => acc + item.price * item.cantidad,0); 

    const value = {carrito, agregarProducto , carritoCantidad , borrarProducto, vaciarCarrito, totalCarrito , itemCarrito};

    return(
        <CartContext.Provider value={value} displayName="CartContext" >
                {children}
                <ToastContainer />
        </CartContext.Provider>
    )
};