import { useEffect, useState } from "react"
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer";
import { getCandles} from "../lib/candles.requests";
import { useParams } from "react-router-dom";

export const Category = () =>{
    const {id} = useParams();

    const [products , setProducts] = useState([]);
    useEffect(() =>{

        getCandles(id)
            .then(res =>{
                setProducts(res)}

            )
    }, [id]);

return(
    <div>
        <ItemListContainer products={products} />
    </div>
)
    }