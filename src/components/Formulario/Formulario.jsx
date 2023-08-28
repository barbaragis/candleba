
import { useState } from "react"
import "../Formulario/Formulario.css"
import { useCartContext } from "../../state/CartContext";
import { agregarOrden } from "../../lib/orden.requests";
import { updateCandles } from "../../lib/candles.requests";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ClipLoader from "react-spinners/ClipLoader";

export const Formulario = () => {
    const [nombre,setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono,setTelefono] = useState('');
    const [email,setEmail] = useState('');
    const [email2 , setEmail2 ] = useState('');
    const [ordenCreada, setOrdenCreada] = useState(false);
    const [ordenId, setOrdenId] = useState(null);
    const [mostrarBoton, setMostrarBoton] = useState(true);
    const [cargando, setCargando] = useState(false);

    const { carrito , totalCarrito , vaciarCarrito} = useCartContext();

    const crearOrden = async () => {

        const items = carrito.map(({id,title, price , cantidad}) =>({
            id,
            title,
            price,
            cantidad
        }));

        setCargando(true);

        const orden = {
            comprador: { nombre, apellido, telefono, email },
            items,
            total: totalCarrito(),
        }
        try{
            const id = await agregarOrden(orden);
            await updateCandles(items);
            vaciarCarrito();
            setOrdenCreada(true);
            setOrdenId(id);
            setMostrarBoton(false);
        }catch (error) {
            toast.error("Hubo un error. Intenta nuevamente")
    }finally {
        setCargando(false);
    }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!validarForm()){
            return;
        } 
        crearOrden();
    }

    function EmailValido (email){
        const emailvalidacion = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return emailvalidacion.test(email)
    }

    const validarForm = () =>{
        if (nombre.trim () === ''){
            toast.error('Debes ingresar un nombre', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        
        return false;
    }

    if (apellido.trim () === ''){
        toast.error('Debes ingresar tu apellido', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    return false;
    }

    if (!telefono.match(/^[0-9]{7,14}$/)){
        toast.error('Debes ingresar tu número de teléfono', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    
    return false;
    }

    if (!EmailValido(email)){
        toast.error('El email es incorrecto', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    
    return false;
    }

    if (email !== email2) {
        toast.error('Las direcciones de email no coinciden', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        return false;
    }

    return true;
}

    return(
        <div className="formulario__wrapper">
            <div className="card__container">
                <img src="https://illumecandles.com/cdn/shop/products/2022_ILLUME_FarAndAaway_PicnicInThePark_RGB_LoRes-736689_960x1248.jpg?v=1675285768" alt="imagen"/>
                <h1>TRAEMOS LA BELLEZA A LA VIDA A TRAVÉS DE LA FRAGANCIA</h1>
                <p> Creemos en una experiencia de fragancia elevada para todos, sin importar el precio. Utilizamos nuestro conocimiento experto y nuestra pasión por los detalles perfectos para crear más allá de fragancias para el hogar, fragancias personales y productos de belleza diseñados y fabricados con orgullo en Argentina . Para cualquier estilo, cualquier espacio, cualquier persona. Somos CANDLE BA</p>
            </div>
            {cargando ? (
                <div>
                    <ClipLoader /> 
                </div>
            ) :
        ordenCreada ? (
            <div className="formulario__mensaje" >
                <span> Su orden ha sido creada. Su ID es : {ordenId} </span> 
                <button className="form-button" onClick={() => window.location.href = '/'} >VOLVER A HOME</button>
                </div>
        ):(
        <form className="formulario__container">
            <h1> Datos de contacto </h1>
            <div className="mb-3" >
                <label htmlFor="exampleFormControlInput1" className="form-label"> NOMBRE</label>
                <input type="text" className="form-control" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Ingresa tu nombre" />
            </div>
            <div className="mb-3" >
                <label htmlFor="exampleFormControlInput1" className="form-label">   APELLIDO </label>
                <input type="text" className="form-control" value={apellido} onChange={(e) => setApellido(e.target.value)} placeholder="Ingresa tu apellido" />
            </div>
            <div className="mb-3" >
                <label htmlFor="exampleFormControlInput1" className="form-label"> TELÉFONO </label>
                <input type="number" className="form-control" value={telefono} onChange={(e) => setTelefono(e.target.value)} placeholder="Ingresa tu teléfono" />
            </div>
            <div className="mb-3" >
                <label htmlFor="exampleFormControlInput1" className="form-label"> CORREO ELECTRÓNICO</label>
                <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Ingresa tu correo electrónico" />
            </div>
        <div className="mb-3" >
            <label htmlFor="exampleFormControlInput1" className="form-label"> CONFIRMAR CORREO ELECTRÓNICO</label>
        <input type="email" className="form-control" value={email2} onChange={(e) => setEmail2(e.target.value)} placeholder="Ingresa tu correo electrónico" />
        </div>
            {mostrarBoton && <button className="form-button" onClick={handleSubmit}> CONFIRMAR ORDEN </button>}
        </form>
        )}
        </div>
    )

 }