import { useEffect, useState } from "react"
import { getCandles } from "../lib/candles.requests";
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer";


export const Home = () =>{
    const [products , setProducts] = useState([]);
    const [Cargando , setCargando] = useState(true);

    useEffect(() =>{

        getCandles()
        .then(res => {
            setCargando (false);
            setProducts(res)})
    },[]);



    return(
        <div>
            <span className="cargando"> {Cargando ? "Cargando productos..." : "Productos"} </span>
            <ItemListContainer products={products} />
        </div>
    )
}