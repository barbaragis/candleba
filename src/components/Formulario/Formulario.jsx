import { useEffect, useState } from "react";
import { useCartContext } from "../../state/CartContext";
import { agregarOrden } from "../../lib/orden.requests";
import "../Formulario/Formulario.css"
import { Link } from "react-router-dom";

function Formulario  () {
    const{vaciarCarrito} = useCartContext();
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [emailValido , setEmailValido] = useState('');
    const [telefono, setTelefono] = useState('');
    const [esValido, setEsValido] = useState(false);
    const [ordenId, setOrdenId] = useState(null);
    const [mostrarMensaje, setMostrarMensaje] = useState(false);

    useEffect (() =>{

        const nombreValido = nombre.trim() !== '';
        const emailValido = /\S+@\S+\.\S+/.test(email);
        const telefonoValido = telefono.trim() !== '';

        setEsValido(nombreValido && emailValido && telefonoValido);
    } , [nombre , email, telefono]);

        const handleSubmit = (event) =>{
            event.preventDefault();
            if (esValido) {
                console.log('form valido');
            }else{
                console.log ('revise los campos')
            }
        };

        const {carrito} = useCartContext();

        const items = carrito.map(({ id, title , price}) =>({
            id,
            title,
            price,
        }));

        const crearOrden = async () =>{

            const orden = {
                comprador: {nombre , telefono , email},
                items,
                total:0

            };

           const id = await agregarOrden(orden);
           console.log(id);

            vaciarCarrito();
            setOrdenId(id);
            setMostrarMensaje(true);
            setNombre('')
            setEmail('')
            setEmailValido('')
            setTelefono('')

    }

        return(
            <>
            <h1> DATOS DE CONTACTO </h1>
            <form className="formulario" onSubmit={handleSubmit}>
                <div className="form" >
                    <label for="formGroupExampleInput" class="form-label">Nombre</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Ingresa tu nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>
                <div  className="form">
                    <label for="formGroupExampleInput" class="form-label"> Apellido</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Ingresa tu apellido" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>
                <div  className="form">
                <label for="formGroupExampleInput2" class="form-label">Email</label> 
                <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Ingresa tu correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} /> 
                </div>
                <div   className="form">
                <label for="formGroupExampleInput2" class="form-label">Confirmar tu correo electrónico</label> 
                <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Ingresa tu correo electrónico" value={emailValido} onChange={(e) => setEmailValido(e.target.value)} /> 
                </div>
                <div  className="form" >
                <label for="formGroupExampleInput2" class="form-label">Teléfono</label>
                <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Ingresa tu teléfono"  value={telefono} onChange={(e) => setTelefono(e.target.value)}/>
                <button className="form-button" onClick={crearOrden} disabled={!esValido}> Realizar pedido </button>
                </div>
                </form>
                {mostrarMensaje && (
                    <div className="mensaje ">
                        <div className="card" >
                        <h2 className="card-header">Gracias por su compra </h2> 
                        <div className="card-body" />
                            <p> Orden : {ordenId}</p>  
                            <Link  to={"/"} > 
                            <button className="form-button">VOLVER A HOME 
                            </button>
                            </Link>
                            </div>
                        </div>
                )}
            </>
        )
            } 

export default Formulario;