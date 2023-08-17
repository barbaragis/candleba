import { useEffect, useState } from "react";
import { useCartContext } from "../../state/CartContext";
import { agregarOrden } from "../../lib/orden.requests";
import "../Formulario/Formulario.css"
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";



function Formulario  () {
    const [Cargando, setCargando] = useState(false);
    const{vaciarCarrito , totalCarrito } = useCartContext();
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [emailValido , setEmailValido] = useState('');
    const [telefono, setTelefono] = useState('');
    const [esValido, setEsValido] = useState(false);
    const [error, setError] = useState({
        nombre: '',
        apellido : '',
        email : '',
        telefono: '',
    })
    const [ordenId, setOrdenId] = useState(null);
    const [mostrarMensaje, setMostrarMensaje] = useState(false);
    const [mostrarValidacion , setMostrarValidacion] = useState(false);


    useEffect (() =>{
        const nombreValido = nombre.trim().length >=3 ;
        const apellidoValido= apellido.trim() !== '';
        const emailValidoFormato = /\S+@\S+\.\S+/.test(email);
        const telefonoValido = telefono.trim() !== '';

        setError({
            nombre: nombreValido ? '' : "Verifique los datos ingresados",
            apellido: apellidoValido ? '' : "Verifique los datos ingresados",
            email: emailValido ? '' : "El correo no es valido",
            telefono: telefonoValido ? '' : "El telefono es obligatorio",
        })

        setEsValido(nombreValido && apellidoValido && emailValidoFormato && telefonoValido);
    } , [nombre , apellido, email, telefono]);

        const handleSubmit = async (event) =>{
            event.preventDefault();
            if (esValido) {
                setCargando(true);

                try {
                    await crearOrden();
                }catch (error){
                    console.error('error' , error)
                }
                setCargando(false);
            }else{
              mostrarError();
            }
        };

        const mostrarError = () =>{
            const nuevoError ={
                nombre: '',
                apellido: '',
                email: '',
                telefono : '',
            }
            setError(nuevoError);
        }


        const {carrito} = useCartContext();

        const items = carrito.map(({ id, title , price }) =>({
            id,
            title,
            price,
        }));

        const crearOrden = async () =>{
            const orden = {
                comprador: {nombre , telefono , email},
                items,
                total: totalCarrito(),
            };

        try{
        const id = await agregarOrden(orden);
            vaciarCarrito();
            setOrdenId(id);
            setMostrarMensaje(true);
            setNombre('')
            setApellido('')
            setEmail('')
            setEmailValido('')
            setTelefono('')
    } catch(error){
        console.error('error' , error);
    }
}

        return(
            <>
            <h1> DATOS DE CONTACTO </h1>
            <form className="formulario" onSubmit={handleSubmit}>
                <div className="form" >
                    <label htmlFor="formGroupExampleInput" className="form-label">Nombre</label>
                    <input type="text" className={`form-control ${error.nombre && mostrarValidacion
                         ? 'is-invalid' : ''}`} id="formGroupExampleInput"  value={nombre} onChange={(e) => setNombre(e.target.value)} onBlur={mostrarError} />
                    {mostrarValidacion && nombre.trim().length < 3 && (<p className="text-danger"> Verifique los datos ingresados </p>)}
                </div>
                <div  className="form">
                    <label htmlFor="formGroupExampleInput" className="form-label"> Apellido</label>
                    <input type="text" className={`form-control ${mostrarValidacion && apellido.trim() === '' ? 'is-invalid' : ''}`}  id="formGroupExampleInput" placeholder="Ingresa tu apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} onBlur={mostrarError}/>
                    {mostrarValidacion && apellido.trim() === '' && (
                        <p className="text-danger"> El apellido es obligatorio </p>
                    )}
                </div>
                <div  className="form">
                <label htmlFor="formGroupExampleInput2" className="form-label">Email</label> 
                <input type="text" className= {`form-control ${mostrarValidacion && !emailValido ? 'is-invalid' : '' } `} id="formGroupExampleInput2" placeholder="Ingresa tu correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)}  onBlur={mostrarError}/>
                {mostrarValidacion && !emailValido && (
                    <p className="text-danger"> El correo no es valido</p>
                )} 
                </div>
                <div   className="form">
                <label htmlFor="formGroupExampleInput2" className="form-label">Confirmar tu correo electrónico</label> 
                <input type="text" className= {`form-control ${mostrarValidacion && !emailValido ? 'is-invalid' : '' } `} id="formGroupExampleInput2" placeholder="Ingresa tu correo electrónico" value={emailValido} onChange={(e) => setEmailValido(e.target.value)} onBlur={mostrarError} />
                {mostrarValidacion && !emailValido && (
                    <p className="text-danger"> Los correos no coinciden </p>
                )} 
                </div>
                <div  className="form" >
                <label htmlFor="formGroupExampleInput2" className="form-label">Teléfono</label>
                <input type="text" className={`form-control ${mostrarValidacion && telefono.trim() === '' ? 'is-invalid' : ''}`} id="formGroupExampleInput2" placeholder="Ingresa tu teléfono"  value={telefono} onChange={(e) => setTelefono(e.target.value)} onBlur={mostrarError}/>
                {mostrarValidacion && telefono.trim() === '' && (
                    <p className="text-danger"> El telefono es obligatorio </p>
                )}
                <button className="form-button" onClick={crearOrden} disabled={!esValido}> Realizar pedido </button>
                </div>
                </form>
                {Cargando && <ClipLoader/>}
                {mostrarMensaje && (
                    <div className="mensaje ">
                        <div className="card" >
                        <h2 className="card-header">Gracias por su compra </h2> 
                        <div className="card-body" />
                            <p> El ID es  : {ordenId}</p>  
                            <Link  to={"/"} > 
                            <button className="form-button">VOLVER A HOME </button>
                            </Link>
                            </div>
                        </div>
                )}
            </>
        )
            } 

export default Formulario;