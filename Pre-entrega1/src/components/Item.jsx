import { Link } from "react-router-dom"

const Item =({id,nombre,img,precio,stock}) =>{

    return(
        <article>
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
                    Precio: ${precio}
                </p>
                <p>
                Stock disponible: {stock}
                </p>
            </section>
            <footer>
                <Link to={`/Item/${id}`} className="botonDetalle">Ver detalle</Link>
            </footer>
        </article>

    )
}

export default Item