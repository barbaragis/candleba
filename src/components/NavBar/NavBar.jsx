
import { CartWidget } from "../CartWidget/CartWidget";
import "../NavBar/NavBar.css"

export const NavBar = () =>{
    return(
        <header> 
                <div className="nav__contain"> 
                    <img className="nav__logo" src="https://t4.ftcdn.net/jpg/04/81/15/53/360_F_481155313_zI5s9UpCuEScodhU1LmIePwCqJIkVBAM.jpg" alt="logo"/>
                    <ul className="nav ">
                        <li className="nav-item ">
                            <a className="nav-link text-bg-light p-3" aria-current="page" href="#">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-bg-light p-3" href="#">NOSOTROS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-bg-light p-3" href="#">NUESTRAS TIENDAS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-bg-light p-3 "> CONTACTO </a>
                        </li>
                    </ul>
                <CartWidget />
            </div>
        </header>
    )
}