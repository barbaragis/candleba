import {
    collection, doc, getDocs , where , query, getDoc, addDoc, writeBatch, increment
} from "firebase/firestore";
import {db} from "./config";


const candlesRef = collection(db,"items");

export const getCandles = async(category) =>{
    const q = category ? query(candlesRef , where('category', '==' , category))
    : candlesRef;



    let candles = [];
    const querySnapshot = await getDocs (q);
    querySnapshot.forEach((doc) => {
    candles = [...candles, {...doc.data(), id: doc.id}];
    });
    return candles;
}


    export const getCandle = async (id) =>{

    const docum = doc(db , "items" , id);
    const documenSnap = await getDoc(docum);

    if(documenSnap.exists()) return {id: documenSnap.id, ...documenSnap.data()};

    return null;
    };



    export const updateCandle = async (id, item) => {
        const newCandle = await updateCandle(doc(db, "items" , id) , item);
        return;
    };

    export const deleteCandle = async (id) => {
        return await deleteCandle(doc(db, "items" , id))
    } ;

    export const updateCandles = async (items) => {
        const batch = writeBatch(db);

    items.forEach(({id, cantidad}) =>{
        batch.update(doc(db, "items" , id) ,{
            stock: increment(-cantidad)
        })
    })

     batch.commit()
}