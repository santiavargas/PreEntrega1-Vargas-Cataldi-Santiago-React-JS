import React, { useEffect, useState } from 'react'
import { getProductos, getProductByCat } from './assets/arrayProductos'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({greeting}) => {
    const [productos, setProductos] =useState([])

    const {categoriaId} = useParams()

    useEffect(()=>{

        const buscarCategoria = categoriaId ? getProductByCat : getProductos

        buscarCategoria(categoriaId)
        .then(response => {
            setProductos(response)
        })
        .catch(error=>{
            console.log(error)
        })
    }, [categoriaId])


    return (
        <div>
            <h2>{greeting}</h2>
            <div >
                <ItemList productos={productos}/>
            </div>
        </div>
    )
}

export default ItemListContainer
