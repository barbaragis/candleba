import { BsCart3} from "react-icons/bs" 
import { useCartContext } from "../../state/CartContext"
import { Link } from "react-router-dom";
import "../CartWidget/CartWidget.css"


export const CartWidget = () => {
    const {carritoCantidad} = useCartContext();
    return(
        <div className="carrito__container">
            <Link to={"/carrito"}>
                <BsCart3 className="carrito__icono"/>   {carritoCantidad() ?
                <span className="carrito__cantidad">  {carritoCantidad()  }</span> : null}
            </Link>
        </div>
    )
}