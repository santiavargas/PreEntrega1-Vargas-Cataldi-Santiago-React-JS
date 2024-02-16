import React from 'react'
import CartWidget from './CartWidget'
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
