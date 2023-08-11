

import { NavLink, Outlet } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";
import "../NavBar/NavBar.css"


export const NavBar = () =>{
    return(
        <>
        <header className="header"> 
                <div className="nav__contain"> 
                    <NavLink to={"/"}>
                        <img className="nav__logo" src="/logo.png" alt="logo"/>
                    </NavLink>
                    <div className="nav">
                        <NavLink className="nav-link" to={"/"}> HOME</NavLink>
                        <NavLink className="nav-link "to={"category/velas"}> VELAS </NavLink>
                        <NavLink className="nav-link"to={"category/difusores"}> DIFUSORES </NavLink>
                        <NavLink className="nav-link  "to={"category/accesorios"}> ACCESORIOS & HOGAR </NavLink>
                    </div>
                    <CartWidget />
            </div>
        </header>
        <Outlet/>
        </>
    )
}