import { useEffect, useState } from "react";
import { ItemCount } from "../components/ItemCount/ItemCount";
import { getCandle } from "../lib/candles.requests";
import "../pages/Detail.css"
import { useParams } from "react-router-dom";

export const Detail = () =>{
    const {id} = useParams();
    const [candle, setCandle] = useState({});

    useEffect(() =>{
        getCandle(+id).then((res) =>{
            setCandle(res);
        });
    }, []);

    if(!Object.keys(candle).length) return

    return(
        <div className="producto__detalle">
            <div className="producto__imagen" >
                <img src={candle.img} />
                <ItemCount stock={10} />
            </div>
            <div className="producto__info">
                <span className="producto__categoria">{candle.category} </span>
                <h2 className="producto__titulo"> {candle.title} </h2>
                <span className="producto__precio"> $ {candle.price} </span>
                <p className="producto__descripcion"> {candle.description} </p>
            </div>
        </div>
    )
}