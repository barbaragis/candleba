import './App.css'
import { NavBar } from './components/NavBar/NavBar'
import {Footer} from './components/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Category } from './pages/Category';
import { CartProvider } from './state/CartContext';
import { Carrito } from './components/Carrito/Carrito';
import { Formulario } from './components/Formulario/Formulario';


const routes =createBrowserRouter(
  createRoutesFromElements(
  <Route element={<NavBar/> } > 
    <Route path='/' element={<Home />} />
    <Route path='/item/:id' element={<Detail />} />
    <Route path='/category/:id' element={<Category/>}/>
    <Route path='/carrito' element={<Carrito/>}/>
    <Route path='/formulario' element={<Formulario /> } />
  </Route>
)
);

function App() {

  return (
    <>
      <div className='container'>
        <div className='main-content'>
        <CartProvider>
          <RouterProvider router={routes}/>
          </CartProvider>
          </div>
          <Footer/>
      </div>
    </>
  )
}

export default App
