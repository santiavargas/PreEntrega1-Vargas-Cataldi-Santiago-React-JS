import React, { useEffect, useState } from 'react'

import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

import { getDocs, collection, query, where, QueryStartAtConstraint } from 'firebase/firestore'
import db from '../db/db'

const ItemListContainer = ({greeting}) => {
    const [productos, setProductos] =useState([])
    const [loading, setLoading] =useState(true)

    const categoria = useParams().categoria

    useEffect(()=>{
        setLoading(true)

        const collectionRef = categoria
        ? query (collection(db, "productos"),where("categoria", "==" ,  categoria))
        : collection(db,"productos")

        getDocs(collectionRef)
        .then(response=> {
            const productosAdapted = response.docs.map(doc => {
                const data=doc.data()
                return { id: doc.id, ...data}
            })
            setProductos(productosAdapted)
        })
        .catch(error=> {
            console.log(error)
        })
        .finally(()=>{
            setLoading(false)
        })
    })

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
