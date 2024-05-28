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
    const [errorsValidated, setErrorsValidated] = useState(undefined)


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
      const errors = validations();

      if (errors) {
        const alertErrors = errors.filter(e => e.type == 'alert');
        alertErrors.forEach(a => alert(a.description));
        const textErrors = errors.filter(e => e.type == 'text');
        setErrorsValidated(textErrors);
      } else {
        await updatePokemonName(id, newName);
        setPokemon({ ...pokemon, nombre: newName });
        setEditing(false);
        setErrorsValidated(undefined);
      }
    };

      const validations = () => {
        const errors = [];
        if (!pokemon) {
            errors.push({
                name: "pokemon",
                type: "alert",
                description: "pokemon no está definido"
            })
        }
        if (!newName) {
          errors.push({
              name: "nombreEdit",
              type: "text",
              description: "Nuevo nombre es un campo requerido"
          })
      }
        return errors.length > 0 ? errors : undefined
    }

    return (
        <div>
          <NaviComponent currentPage={'details'}/>
          {editing ? (
            <div>
              <h2>Editar Nombre del Pokémon</h2>
              <span>Nuevo nombre: </span>
              {
                errorsValidated 
                && errorsValidated.find(e => e.name == 'nombreEdit' )
                && <span style={{color: 'red'}}>{errorsValidated.find(e => e.name == 'nombreEdit' ).description}</span>
            }
              <input type="text" name='nombreEdit' value={newName} onChange={(e) => setNewName(e.target.value)}/>
              <button onClick={handleOnSave}>Guardar</button>
            </div>
          ) : (
            <div>
              <h2>Detalles del Pokémon</h2>
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
                <span>Tipo: {pokemon.tipo.join(", ")}</span>
              </div>
              <button onClick={handleOnEdit}>Editar</button>
              <button onClick={handleOnDelete}>Eliminar Pokémon</button>
            </div>
          )}
        </div>
      );
}

export default PokemonDetails