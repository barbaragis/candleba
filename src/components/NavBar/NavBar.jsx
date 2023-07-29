

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
                        <img className="nav__logo" src="../public/LOGO.png" alt="logo"/>
                    </NavLink>
                    <div className="nav">
                        <NavLink className="nav-link" to={"/"}> Home</NavLink>
                        <NavLink className="nav-link "to={"category/velas"}> Velas </NavLink>
                        <NavLink className="nav-link"to={"category/difusores"}> Difusores </NavLink>
                        <NavLink className="nav-link  "to={"category/accesorios"}> Accesorios </NavLink>
                    </div>
                        <CartWidget />
            </div>
        </header>
        <Outlet/>
        <Footer />
        </>
    )
}