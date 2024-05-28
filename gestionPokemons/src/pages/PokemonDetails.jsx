import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { deletePokemonById, getPokemonById, updatePokemonName } from '../services/pokemonService'
import NaviComponent from '../components/nav/NaviComponent'

const PokemonDetails = () => {
    const { id } = useParams()
    const navigate = useNavigate();
    const [pokemon, setPokemon] = useState(null)
    const [editing, setEditing] = useState(false);
    const [newName, setNewName] = useState('');

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const data = await getPokemonById(id)
                setPokemon(data)
            } catch (error) {
                console.error('Error fetching pokemon details:', error)
            }
        }

        fetchPokemon()
    }, [id])

    const handleOnDelete = async () => {
        await deletePokemonById(id);
        navigate('/')
    }

    const handleOnEdit = () => {
        setEditing(true);
      };

    if (!pokemon) {
        return <div>Loading...</div>
    }

    const handleOnSave = async () => {
        await updatePokemonName(id, newName);
        setPokemon({ ...pokemon, nombre: newName });
        setEditing(false);
      };

    return (
        <div>
          <NaviComponent currentPage={'details'}/>
          {editing ? (
            <div>
              <h2>Editar Nombre del Pokémon</h2>
              <span>Nuevo nombre: </span>
              <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)}/>
              <button onClick={handleOnSave}>Guardar</button>
            </div>
          ) : (
            <div>
              <h1>Detalles del Pokémon</h1>
              <div>
                <span>Id: {pokemon.id}</span>
              </div>
              <div>
                <span>Nombre: {pokemon.nombre}</span>
              </div>
              <div>
                <span>Url: {pokemon.url}</span>
              </div>
              <div>
                <span>Altura: {pokemon.altura}</span>
              </div>
              <div>
                <span>Peso: {pokemon.peso}</span>
              </div>
              <div>
                <span>Tipo: {pokemon.tipo}</span>
              </div>
              <button onClick={handleOnEdit}>Editar</button>
              <button onClick={handleOnDelete}>Eliminar Pokémon</button>
            </div>
          )}
        </div>
      );
}

export default PokemonDetails