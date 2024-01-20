import ItemCount from "./ItemCount"

const ItemDetail =({id, nombre, img, categoria, descripcion, precio, stock}) => {
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
                <ItemCount stock={stock} inicial={1} onAdd={(quantity) => console.log("cantidad agregada")} />
            </footer>
        </article>
    )
}

export default ItemDetail