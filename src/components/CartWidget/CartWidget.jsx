import { HiShoppingCart} from "react-icons/hi" 
import { useCartContext } from "../../state/CartContext"
import { Link } from "react-router-dom";
import "../CartWidget/CartWidget.css"


export const CartWidget = () => {
    const {carritoCantidad} = useCartContext();
    return(
        <div className="carrito__container">
            <Link to={"/carrito"}>
                <HiShoppingCart className="carrito__icono"/>   {carritoCantidad() ?
                <span className="carrito__cantidad  position-absolute translate-middle badge text-bg-secondary">  {carritoCantidad()  }</span> : null}
            </Link>
        </div>
    )
}