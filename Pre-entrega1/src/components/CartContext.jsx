import { createContext, useState } from "react";


export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    console.log(cart)

    const addItem = (item, quantity) => {
        if(!isInCart(item.id)){
            setCart(prev =>[...prev,{...item, quantity}])
        } else {
            console.error("el producto ya fue agregado")
        }
    }

    const removeItem = (itemId) =>{
        const cartUpdate = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdate)
        console.log(itemId)
    }

    const clearCart = () => {
        setCart([])
    }

    const totalQuantity = () => {
        const cantidad = cart.reduce((total, producto)=> total + producto.quantity, 0)
        return cantidad
    }

    const precioTotal = () => {
        const total = cart.reduce((total,producto)=> total + (producto.quantity * producto.precio), 0)
        return total
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }
    

    return (
        <CartContext.Provider value = {{ cart, addItem, removeItem, clearCart, totalQuantity : totalQuantity (), precioTotal}}> 
            {children}
        </CartContext.Provider>
    )
        
}

export default CartContext