import ItemCount from "./ItemCount"
import React, { useContext, useState } from 'react'
import { Link } from "react-router-dom"
import CartContext from "./CartContext"


const ItemDetail =({id, nombre, img, categoria, descripcion, precio, stock}) => {

    const [quantityAdded, setQuantittyAdded] = useState(0)

    const {addItem} = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantittyAdded(quantity)

        const item = {
            id, nombre, precio
        }
        addItem (item, quantity)
    }

    return(
        <article className="ItemContenedor">
            <header>
                <h2>
                    {nombre}
                </h2>
            </header>
            <picture>
                <img src={img} alt={nombre} />
            </picture>
            <section>
                <p>
                    Categoria: {categoria}
                </p>
                <p>
                    Descripción: {descripcion}
                </p>
                <p>
                    Precio: ${precio}
                </p>
            </section>
            <footer>
                {
                    quantityAdded > 0 ? (
                    <Link to = "/cart" className="terminar">Terminar Compra</Link>
                ) : (<ItemCount stock={stock} inicial={1} onAdd={handleOnAdd} />)
                }
                
            </footer>
        </article>
    )
}

export default ItemDetail