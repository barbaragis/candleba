import { useEffect, useState } from "react"
import { getCandles } from "../lib/candles.requests";
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer";
import ClipLoader from "react-spinners/ClipLoader";

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
            {Cargando && <ClipLoader/>}
            <ItemListContainer products={products} />
        </div>
    )
}