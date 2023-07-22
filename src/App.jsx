import './App.css'
import { NavBar } from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Category } from './pages/Category';

const routes =createBrowserRouter(
  createRoutesFromElements(
  <Route element={<NavBar/> } > 
    <Route path='/' element={<Home />} />
    <Route path='/item/:id' element={<Detail />} />
    <Route path='/category/:id' element={<Category/>}/>
  </Route>
)
);

function App() {

  return (
    <>
      <div>
        <RouterProvider router={routes}/>
      </div>
    </>
  )
}

export default App
