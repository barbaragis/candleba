import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({children}) =>{
    const [carrito, setCarrito] = useState([]);

    const agregarProducto = (item, cantidad) =>{
        const element = carrito.find((producto) => producto.id === item.id)

        if (!element) {
            return setCarrito ([...carrito , {...item , cantidad}]);
        }

        const actualizarCarrito = element.cantidad + cantidad;

            if (actualizarCarrito <= item.stock) {
                const nuevoCarrito = carrito.map ((producto) =>
                producto.id === item.id ? {...producto , cantidad: actualizarCarrito} : producto);
                setCarrito(nuevoCarrito);
            }else {
                alert('No hay mas stock')
            }
        }

    const borrarProducto = (id) =>{
        const carritoNuevo= carrito.filter((producto) => producto.id !== id);
        setCarrito(carritoNuevo);
    }

    const carritoCantidad = () => carrito.reduce((acc,item) => acc + item.cantidad, 0 );

    const vaciarCarrito = () => setCarrito([]);

    const totalCarrito = () => carrito.reduce((acc, item) => acc + item.price * item.cantidad,0); 

    const value = {carrito, agregarProducto , carritoCantidad , borrarProducto, vaciarCarrito, totalCarrito };

    return(
        <CartContext.Provider value={value} displayName="CartContext" >
                {children}
        </CartContext.Provider>
    )
};