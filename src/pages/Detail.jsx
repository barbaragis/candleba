import { useEffect, useState } from "react";
import { ItemCount } from "../components/ItemCount/ItemCount";
import { getCandle } from "../lib/candles.requests";
import "../pages/Detail.css"
import { useNavigate, useParams } from "react-router-dom";
import { useCartContext } from "../state/CartContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Detail = () =>{
    const {id} = useParams();
    const navigate = useNavigate();
    const [candle, setCandle] = useState({});
    const {agregarProducto} = useCartContext();

    useEffect(() =>{
        getCandle(id).then((res) =>{
            if(!res) return navigate ('/');
            setCandle(res);
        });
    }, []);


    const handleAgregar = (cantidad) => {

        agregarProducto(candle, cantidad);
    }


    if(!Object.keys(candle).length) return 

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
                <span> Solo quedan {candle.stock}</span>
                <ItemCount stock={candle.stock}  onAdd={handleAgregar} />
            </div>
        </div>
    )
}