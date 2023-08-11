import {  useNavigate } from "react-router-dom"
import "../Item/Item.css"

export const Item = ({ 
    id,
    img , 
    category ,
    title ,
    price
}) =>{
    const nav = useNavigate();

    return(
        <div className="item" onClick={() => nav(`/item/${id}`)}>
            <div className="producto__card">
                <img src={img} className="producto__imagen" alt="..."/>
                <div className="producto__titulo">
                    <h2>  {title} </h2>
                    </div>
                    <p className="producto__categoria"> {category} </p>
                    <p className="producto__precio"> $ {price} </p>
                    <button className="producto__boton"> VER DETALLE </button>
                </div>
            </div>
    )
}