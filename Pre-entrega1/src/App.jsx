
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { CartProvider } from './components/CartContext'
import Cart from './components/Cart'
import Checkout from './components/Checkout'

function App() {



  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar/>
          <Routes>
            <Route path="/" element= {<ItemListContainer greeting={"Hola!"}/>}/>
            <Route path="/categoria/:categoria" element={<ItemListContainer/>} />
            <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
          </Routes>
        </CartProvider>
      </BrowserRouter>
      
    </>
  )
}

export default App
