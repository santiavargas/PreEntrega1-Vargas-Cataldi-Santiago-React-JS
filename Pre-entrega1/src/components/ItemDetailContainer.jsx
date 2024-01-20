import { useEffect, useState } from "react"
import { getProductById } from "./assets/arrayProductos"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {
    const [producto, setProductos] = useState(null)

    const {itemId} = useParams()

    useEffect(() => {
        getProductById(itemId)
        .then(response =>{
            setProductos(response)
        })
        .catch(error =>{
            console.log(error)
        })
    }, [])

    return(
        <div className='itemListContainer'>
            <ItemDetail {...producto}/>
        </div>
    )

}

export default ItemDetailContainer