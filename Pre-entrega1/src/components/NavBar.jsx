import React from 'react'
import NavBarButtons from './NavBarButtons'
import CartWidget from './CartWidget'
import Carrito from './assets/CarritoCompras.png'
import Pizza from './assets/Pizza.png'

const NavBar = () => {
    return (
    <nav>
        <div className='logo'>
            <img src={Pizza} alt="Pizza" />
            <h1>Pizzeria</h1>
        </div>
        
        <div>
            <NavBarButtons categoria={"Pizzas"}/>
            <NavBarButtons categoria={"Empanadas"}/>
            <NavBarButtons categoria={"Otros platos"}/>
            <NavBarButtons categoria={"Bebidas"}/>
        </div>
        <div>
            <CartWidget/>
        </div>
    </nav>
    )
}

export default NavBar
