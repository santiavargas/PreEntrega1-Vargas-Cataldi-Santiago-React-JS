import React, { useContext } from 'react'
import Carrito from './assets/CarritoCompras.png'
import CartContext from './CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const {totalQuantity} = useContext(CartContext)

    return (
        <Link to="/Cart">
            <img src={Carrito} alt="" />
            {totalQuantity}
        </Link>
    )
}

export default CartWidget
