import { HiShoppingCart} from "react-icons/hi" 
import { useCartContext } from "../../state/Cart.Context"
import { Link } from "react-router-dom";
import "../CartWidget/CartWidget.css"


export const CartWidget = () => {
    const {carritoCantidad} = useCartContext();
    return(
        <div className="carrito__container">
            <Link to={"/carrito"}>
                <HiShoppingCart className="carrito__icono"/> 
                <span className="carrito__cantidad  position-absolute top-60 start-90 translate-middle badge text-bg-secondary">{carritoCantidad()} </span>
            </Link>
        </div>
    )
}