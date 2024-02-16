import { useContext, useState } from "react"
import CartContext from "./CartContext"
import {collection, addDoc } from "firebase/firestore"
import FormularioCheckout from "./FormularioCheckout"
import db from "../db/db"



const Checkout = () => {
    const [datosForm, setDatosForm] = useState({
        nombre: "",
        telefono: "",
        email: "",
        repetirEmail:"",
    })

    const { cart, precioTotal } = useContext(CartContext)
    const [IdOrden, setIdOrden] = useState(null)

    const guardarDatosInput = (event) => {
        setDatosForm({...datosForm, [event.target.name] : event.target.value })
    
    }
    

    const fecha = new Date()

    const enviarOrden = (event) =>{
        event.preventDefault()
        const orden = {
            comprador: {...datosForm},
            productos: [...cart],
            fecha: fecha.toISOString(),
            total: precioTotal(),
        }

        if(datosForm.email !== datosForm.repetirEmail){
            alert("Los campos de email deben ser iguales")
            return
        }
        const ordenesRef = collection(db, "ordenes")
        addDoc(ordenesRef, orden)
            .then((respuesta)=>{
                setDatosForm({
                    nombre:"",
                    telefono:"",
                    email:"",
                    repetirEmail:"",
                })

                setIdOrden(respuesta.id)
            })
            .catch((error)=>{
                console.log(error)
            })
        }
console.log(datosForm)

    return (
        <article>
            {
                IdOrden ? (
                    <article>
                        <h2>Orden generada con éxito!</h2>
                        <p>El Id de su orden es: {IdOrden}</p>
                    </article>
                ) : (
                    <FormularioCheckout datosForm={datosForm} guardarDatosInput={guardarDatosInput} enviarOrden={enviarOrden}/>
                )
            }
        </article>
    )
}

export default Checkout