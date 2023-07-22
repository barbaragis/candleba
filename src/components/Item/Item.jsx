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
                <div className="card-body">
                    <h5 className="producto__titulo">  {title} </h5>
                    <p className="producto__categoria"> {category} </p>
                    <p className="producto__precio"> $ {price} </p>
                    <button className="producto__boton"> Ver detalle </button>
                </div>
            </div>
        </div>
    )
}