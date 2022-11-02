import React from 'react'

export default function Card({producto = {}, setMisProductos}) {
    return (
    <>
        <div className="card">
            <img src={producto.imagen} alt="imagen" />
            <h3>{producto.nombre}</h3>
            <p>{producto.precio}</p>
            <button
                onClick={() => setMisProductos(productos => productos.filter(prod => prod.id !== producto.id))}
            >Remover Item</button>
        </div>
    </>
  )
}
