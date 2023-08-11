import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({children}) =>{
    const [carrito, setCarrito] = useState([]);

    const agregarProducto = (item, cantidad) =>{

        const element = carrito.find((producto) => producto.id === item.id)

        if (element) {
            const carritoActualizado = carrito.map((producto)=>{
                if(producto.id === item.id){
                    return{...producto , cantidad : producto.cantidad + cantidad}
                }
                return producto;
            }) ;
            setCarrito(carritoActualizado);
        }else{
        setCarrito([...carrito, {...item, cantidad}])
        }
    }

    const borrarProducto = (id) =>{
        const carritoNuevo= carrito.filter((producto) => producto.id !== id);
        setCarrito(carritoNuevo);
    }

    const carritoCantidad = () => carrito.reduce((acc,item) => acc + item.cantidad, 0 );

    const vaciarCarrito = () => setCarrito([]);

    const totalCarrito = () => carrito.reduce((total, item) => total + item.price * item.cantidad,0); 

    const value = {carrito, agregarProducto , carritoCantidad , borrarProducto, vaciarCarrito, totalCarrito};

    return(
        <CartContext.Provider value={value} displayName="CartContext" >
                {children}
        </CartContext.Provider>
    )
};