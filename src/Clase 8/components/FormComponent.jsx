import React from 'react'
import { useState } from 'react'

export default function FormComponent() {

    const [user, setUser] = useState(
        {
            nombre: '',
            edad: 0,
            pokemon:'',
            pokeImg:''
        }
    )

    const handleSubmit = (e)=>{
        e.preventDefault()

        if(user.nombre.length < 3) {
            alert("nombre inválido")
            return
        }

        if (user.edad <= 0){
            alert("edad inválida")
            return
        }

        if(user.pokemon.length <= 0 )
        {
            alert("Nombre de Pokemon requerido")
            return
        }

        fetch(`https://pokeapi.co/api/v2/pokemon/${user.pokemon}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setUser({...user, pokeImg: data.sprites.front_default})
        })
        .catch(e => alert("Pokemon inválido"))
        ;

        alert("Registro confirmado")

    }

    return (
    <>
        <form onSubmit={handleSubmit} >
            <label htmlFor='nombre' >nombre</label>
            <input type="text" id="nombre" onChange={(e) =>{ setUser({...user, nombre: e.target.value}) }} />
            <label htmlFor='edad'>edad</label>
            <input type="number" id="edad" onChange={(e) =>{ setUser({...user, edad: e.target.value}) }}/>
            <label htmlFor='pokemon'>Pokemon favorito</label>
            <input type="text" id="pokemon" onChange={(e) =>{ setUser({...user, pokemon: e.target.value}) }}/>
            <button>Enviar solicitud</button>
        </form>
        
        { user.pokeImg && <img src={user.pokeImg} alt={user.pokemon} />}
    </>
  )
}
