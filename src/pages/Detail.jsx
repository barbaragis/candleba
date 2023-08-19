import { useCallback, useEffect, useState } from "react";
import { ItemCount } from "../components/ItemCount/ItemCount";
import { getCandle } from "../lib/candles.requests";
import "../pages/Detail.css"
import { useNavigate, useParams } from "react-router-dom";
import { useCartContext } from "../state/CartContext";
import { ClipLoader } from "react-spinners";


export const Detail = () =>{
    const {id} = useParams();
    const navigate = useNavigate();
    const [candle, setCandle] = useState({});
    const {agregarProducto , itemCarrito} = useCartContext();

    useEffect(() =>{
        getCandle(id).then((res) =>{
            if(!res) return navigate ('/');
            setCandle(res);
        });
    }, []);



    const handleAgregar = useCallback(
        (cantidad) => {
            agregarProducto(candle, cantidad);

        },
        [agregarProducto , candle]
    );


    if(!Object.keys(candle).length) return <ClipLoader />

    return(
        <div className="item__detalle">
            <div className="item__imagen" >
                <img src={candle.img} />
            </div>
            <div className="item__info">
                <span className="item__categoria">{candle.category} </span>
                <h2 className="item__titulo"> {candle.title} </h2>
                <span className="item__precio"> $ {candle.price} </span>
                <p className="item__descripcion"> {candle.description} </p>
                {candle.stock > 0 && <span className="item__stock">  {candle.stock} unidades disponibles !</span>}
                <ItemCount stock={candle.stock - (itemCarrito?.(id)?.cantidad  || 0)} onAdd={handleAgregar} />
            </div>
        </div>
    )
}