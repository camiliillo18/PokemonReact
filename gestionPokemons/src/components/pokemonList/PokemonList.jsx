import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import NaviComponent from '../nav/NaviComponent';
import { getPokemons } from '../../services/pokemonService';

const PokemonList = () => {
    const [pokemons, setPokemons] = useState(undefined);
    const navigate = useNavigate();

    const getDataFromAPI = () => {
        const aux = getPokemons()
        setPokemons(aux)
    }

    const goToPokemonPage = (id) => {
        navigate(`/pokemon/${id}`)
    }

    useEffect(() => {
        getDataFromAPI()
    }, [])


  return (
    <div>
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
                                    <div key={p.id} style={{border: '2px solid', marginBottom: 5, padding: 10,}}>
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
                                            <button onClick={() => goToPokemonPage(p.id)}>Ir al pokemon</button>
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

export default PokemonList
