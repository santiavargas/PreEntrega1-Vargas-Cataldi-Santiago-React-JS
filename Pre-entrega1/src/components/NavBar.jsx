import React from 'react'
import NavBarButtons from './NavBarButtons'
import CartWidget from './CartWidget'
import Carrito from './assets/CarritoCompras.png'
import Pizza from './assets/Pizza.png'
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
    return (
    <nav>
        <Link to={"/"} className='logo'>
            <img src={Pizza} alt="Pizza" />
            <h1 className='titulo'>Pizzeria</h1>
        </Link>
        
        <div className='NavLink'>
            {/* <NavBarButtons categoria={"Pizzas"}/>
            <NavBarButtons categoria={"Empanadas"}/>
            <NavBarButtons categoria={"Otros platos"}/> */}

            <NavLink to={`/categoria/pizza`} className="botonNav">Pizzas</NavLink>
            <NavLink to={`/categoria/empanada`} className="botonNav">Empanadas</NavLink>
            <NavLink to={`/categoria/otros`} className="botonNav">Otros</NavLink>


        </div>
        <div>
            <CartWidget/>
        </div>
    </nav>
    )
}

export default NavBar
