import React from 'react'
import Carrito from './assets/CarritoCompras.png'

const CartWidget = () => {
    return (
        <div>
            <img src={Carrito} alt="" />
            <p>0</p>
        </div>
    )
}

export default CartWidget
