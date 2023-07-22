import { Item } from "../Item/Item";
import "../ItemListContainer/ItemListContainer.css";


export const ItemListContainer = ({ products }) => {

    if (!products){
        return<div> no hay productos </div>
    }

    return(
    <div className="producto__container"> 
        {products.map((product) =>(
        <Item key={product.id}
        id={product.id}
        img={product.img}
        category={product.category}
        title={product.title}
        price={product.price}
        />
        ))}
    </div>
);}