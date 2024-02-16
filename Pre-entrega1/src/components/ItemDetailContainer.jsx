import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"

import { getDoc, doc} from 'firebase/firestore'
import db from '../db/db'


const ItemDetailContainer = () => {
    const [productos, setProducto] = useState(null)
    const [loading, setLoading] =useState(true)

    const {itemId} = useParams()

    useEffect(()=>{
        setLoading(true)

        const docRef=doc(db,"productos", itemId)

        getDoc(docRef) 
            .then(response=>{
                const data = response.data()
                const productoAdapted = { id: response.id, ...data}
                setProducto(productoAdapted)
            })
            .catch(error=>{
                console.log(error)
            })
            .finally(()=>{
                setLoading(false)
            })

    },[itemId])

    return(
        <div className='itemListContainer'>
            <ItemDetail {...productos}/>
        </div>
    )

}

export default ItemDetailContainer