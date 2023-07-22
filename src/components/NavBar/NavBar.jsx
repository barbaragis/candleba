

import { NavLink, Outlet } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";
import { Footer } from "../Footer/Footer";
import "../NavBar/NavBar.css"

export const NavBar = () =>{
    return(
        <>
        <header className="header"> 
                <div className="nav__contain"> 
                    <NavLink to={"/"}>
                        <img className="nav__logo" src="https://t4.ftcdn.net/jpg/04/81/15/53/360_F_481155313_zI5s9UpCuEScodhU1LmIePwCqJIkVBAM.jpg" alt="logo"/>
                    </NavLink>
                    <nav className="nav ">
                        <NavLink className="nav-link  text-secondary" to={"/"}> Home </NavLink>
                        <NavLink className="nav-link text-secondary"to={"category/velas"}> Velas </NavLink>
                        <NavLink className="nav-link text-secondary"to={"category/difusores"}> Difusores </NavLink>
                        <NavLink className="nav-link text-secondary"to={"category/accesorios"}> Accesorios </NavLink>
                    </nav>
                        <CartWidget />
            </div>
        </header>
        <Outlet/>
        <Footer />
        </>
    )
}