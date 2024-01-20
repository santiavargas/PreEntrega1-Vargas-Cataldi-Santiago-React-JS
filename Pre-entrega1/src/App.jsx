import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemCount from './components/ItemCount'
import ItemDetailContainer from './components/ItemDetailContainer'

function App() {



  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element= {<ItemListContainer greeting={"Hola!"}/>}/>
          <Route path="/categoria/:categoriaId" element={<ItemListContainer/>} />
          <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
        </Routes>
      
      </BrowserRouter>
      
    </>
  )
}

export default App
