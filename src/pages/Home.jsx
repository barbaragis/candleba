import { useEffect, useState } from "react"
import { cargarProductos, getCandles } from "../lib/candles.requests";
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer";
import ClipLoader from "react-spinners/ClipLoader";
import { Portada } from "../components/Portada/Portada";



export const Home = () =>{
    const [products , setProducts] = useState([]);
    const [Cargando , setCargando] = useState(true);

    useEffect(() =>{
        cargarProductos()
        getCandles()
        .then(res => {
            setCargando (false);
            setProducts(res)})
    },[]);



    return(
        <div>
            <Portada/>
            {Cargando && <ClipLoader/>}
            <ItemListContainer products={products} />
        </div>
    )
}