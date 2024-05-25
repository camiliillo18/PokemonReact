import React, { useEffect, useState } from 'react'
import { getPokemons } from '../services/pokemonService'
import NaviComponent from '../components/nav/NaviComponent'

const HomePage = () => {
    const [pokemons, setPokemons] = useState(undefined)

    const getDataFromAPI = () => {
        const aux = getPokemons()
        setPokemons(aux)
    }

    useEffect(() => {
        getDataFromAPI()
    }, [])

    const pokemonPage = () => {
        
    }

  return (
    <div>
        <NaviComponent currentPage={'home'}/>
        <div>
            <h2>Lista de pokemons</h2>
            {
                !pokemons || (pokemons && pokemons.length === 0) 
                    ? (
                        <div>
                            <span>No hay pokemons</span>
                        </div>
                    )
                    :  (
                        <div>
                            {
                                pokemons.map(p => (
                                    <div style={{border: '2px solid', marginBottom: 5}}>
                                        <div>
                                            <span>Id: {p.id}</span>
                                        </div>
                                        <div>
                                            <span>Nombre: {p.nombre}</span>
                                        </div>
                                        <div>
                                            <span>Url: {p.url}</span>
                                        </div>
                                        <div>
                                            <span>Altura: {p.altura}</span>
                                        </div>
                                        <div>
                                            <span>Password: {p.password}</span>
                                        </div>
                                        <div>
                                            <span>Peso: {p.peso}</span>
                                        </div>
                                        <div>
                                            <span>Tipo: {p.tipo}</span>
                                        </div>
                                        <div>
                                            <button onClick={pokemonPage()}>Ir al pokemon</button>
                                        </div>
                                    </div>
                                ))
                            }    
                        </div>
                    )
            }
        </div>
    </div>
  )
}

export default HomePage
