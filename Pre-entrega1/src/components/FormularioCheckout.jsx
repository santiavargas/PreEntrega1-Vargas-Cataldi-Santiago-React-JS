import React from 'react'

const FormularioCheckout = ({datosForm, guardarDatosInput, enviarOrden}) => {
    return (
        <form onSubmit={enviarOrden}>
                <label htmlFor="nombre">Nombre</label>
                <input type="text" id="nombre" value={datosForm.nombre} name="nombre"onChange={guardarDatosInput}/>
                <label htmlFor="telefono">Telefono</label>
                <input type="number" id="telefono" name="telefono" value={datosForm.telefono} onChange={guardarDatosInput}/>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={datosForm.email} onChange={guardarDatosInput} />
                <label htmlFor="repetirEmail"> Repetir email</label>
                <input type="email" id="repetirEmail" name="repetirEmail" value={datosForm.repetirEmail} onChange={guardarDatosInput} />
                <button type="submit">Enviar orden</button>

            </form>
    )
}

export default FormularioCheckout
