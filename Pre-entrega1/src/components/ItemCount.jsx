import { useState } from "react"


const ItemCount = ({stock, inicial, onAdd})=>{
    const [cantidad, setCantidad] = useState (inicial)

    const increment = () => {
        if(cantidad < stock){
            setCantidad(cantidad+1)

        }
    }

    const decrement = () => {
        if(cantidad > 1){
            setCantidad(cantidad-1)
        }
    }

    return(

        <div className="contador">
            <div className="controles">
                <button className="botonContador" onClick={decrement}>-</button>
                <h5 className="numeroContador">{cantidad}</h5>
                <button className="botonContador" onClick={increment}>+</button>
            </div>

            <div>
                <button className="botonAgregar" onClick={()=> onAdd(cantidad)} disabled={!stock}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount