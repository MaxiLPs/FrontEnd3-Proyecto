import React from 'react'
import { useState } from 'react'
import Card from './Card'
import { productos } from './productos'

export default function CardList() {
  const [misProductos, setMisProductos] = useState([])
  
  return (
    <>
    { misProductos.length !== 0 && 
    misProductos.map(producto => <Card key={producto.id} producto = {producto} setMisProductos = {setMisProductos} />) }
    <button 
      disabled={misProductos.length === productos.length} 
      onClick={() => setMisProductos([...misProductos, productos[ misProductos.length]])}>
        Agregar al carrito
    </button>
    </>
  )
}
