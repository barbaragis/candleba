import './App.css'
import { ItemCount } from './components/ItemCount/ItemCount'
import { NavBar } from './components/NavBar/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { Footer } from './components/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const handleCart = (qty) =>{
    console.log("La cantidad es" , qty)
  }
  return (
    <>
      <div>
        <NavBar />
        <ItemListContainer greeting={"Bienvenidos"} />
      </div>
      <ItemCount stock={10} onAdd={handleCart}/>
      <Footer />
    </>
  )
}

export default App
