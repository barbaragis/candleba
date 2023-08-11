import { addDoc, collection } from 'firebase/firestore';
import {db} from './config';


const ordenRef = collection(db, 'ordenes');

export const agregarOrden = async (orden) =>{
    const ordenDoc = await addDoc(ordenRef , orden);
    return ordenDoc.id;

    
}