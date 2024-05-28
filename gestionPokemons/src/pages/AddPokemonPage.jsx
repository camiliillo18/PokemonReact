import React, { useState } from 'react'
import { addPokemon } from '../services/pokemonService'
import { useNavigate } from 'react-router-dom'
import NaviComponent from '../components/nav/NaviComponent'

const AddPokemonPage = () => {
    const [newPokemon, setNewPokemon] = useState({})
    const [errorsValidated, setErrorsValidated] = useState(undefined)
    const navigate = useNavigate()

    const idCreator = () => {
        const newId = `${Date.now()}-${Math.floor(Math.random() * 10000)}`;
        return newId
    };
    const urlCreator = (id) => {
        const pageUrl = "http://localhost:5173/"
        const newUrl = `${pageUrl}${id}`;
        return newUrl
    };

    const handlerOnChange = (e) => {
        setNewPokemon({
            ...newPokemon,
            [e.target.name]: e.target.value 
        })
    }

    const handlerOnClick = () => {
        const errors = validations()
        const newId = idCreator();
        const newUrl = urlCreator(newId);
        const newPokemonModified = {
            ...newPokemon,
            id: newId,
            url: newUrl,
            tipo: newPokemon.tipo ? newPokemon.tipo.split(',').map(t => t.trim()) : []
        }

        if (errors) {
            const alertErrors = errors.filter(e => e.type == 'alert');
            alertErrors.forEach(a => alert(a.description));
            const textErrors = errors.filter(e => e.type == 'text');
            setErrorsValidated(textErrors);
        } else {
            addPokemon(newPokemonModified);
            navigate('/');
            setErrorsValidated(undefined);
        }
    }

    const validations = () => {
        const errors = [];
        if (!newPokemon) {
            errors.push({
                name: "newPokemon",
                type: "alert",
                description: "newPokemon no está definido"
            })
        }
        if (!newPokemon.nombre) {
            errors.push({
                name: "nombre",
                type: "text",
                description: "Nombre es un campo requerido"
            })
        }
        if (!newPokemon.altura) {
            errors.push({
                name: "altura",
                type: "text",
                description: "Altura es un campo requerido"
            })
        }
        if (!newPokemon.peso) {
            errors.push({
                name: "peso",
                type: "text",
                description: "Peso es un campo requerido"
            })
        }
        if (!newPokemon.tipo) {
            errors.push({
                name: "tipo",
                type: "text",
                description: "Tipo es un campo requerido"
            })
        }
        return errors.length > 0 ? errors : undefined
    }

  return (
    <div>
    <NaviComponent currentPage={'addPokemon'} />
      <h2>Registro de Pokemons</h2>
      <div>
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <span>Nombre: </span>
            {
                errorsValidated 
                && errorsValidated.find(e => e.name == 'nombre' )
                && <span style={{color: 'red'}}>{errorsValidated.find(e => e.name == 'nombre' ).description}</span>
            }
            <input type="text" name='nombre' onChange={handlerOnChange} />
        </div>
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <span>Altura: </span>
            {
                errorsValidated 
                && errorsValidated.find(e => e.name == 'altura' )
                && <span style={{color: 'red'}}>{errorsValidated.find(e => e.name == 'altura' ).description}</span>
            }
            <input type="text" name='altura' onChange={handlerOnChange} />
        </div>
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <span>Peso: </span>
            {
                errorsValidated 
                && errorsValidated.find(e => e.name == 'peso' )
                && <span style={{color: 'red'}}>{errorsValidated.find(e => e.name == 'peso' ).description}</span>
            }
            <input type="text" name='peso' onChange={handlerOnChange} />
        </div>
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <span>Tipo: </span>
            {
                errorsValidated 
                && errorsValidated.find(e => e.name == 'tipo' )
                && <span style={{color: 'red'}}>{errorsValidated.find(e => e.name == 'tipo' ).description}</span>
            }
            <input type="text" name='tipo' onChange={handlerOnChange} />
        </div>
        <button onClick={handlerOnClick}>Registrar Pokemon</button>
      </div>
    </div>
  )
}

export default AddPokemonPage
