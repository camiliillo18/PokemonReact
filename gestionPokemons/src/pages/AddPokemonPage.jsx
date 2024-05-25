import React, { useState } from 'react'
import { addPokemon } from '../services/pokemonService'
import { useNavigate } from 'react-router-dom'
import NaviComponent from '../components/nav/NaviComponent'

const AddPokemonPage = () => {
    const [newPokemon, setNewPokemon] = useState({})
    const [ids, setIds] = useState([]);
    const [errorsValidated, setErrorsValidated] = useState(undefined)
    const navigate = useNavigate()

    const idCreator = () => {
        const newId = `${Date.now()}-${Math.floor(Math.random() * 10000)}`;
        setIds([...ids, newId]);
        return newId
    };
    const urlCreator = () => {
        const pageUrl = "http://localhost:5173/"
        console.log(ids)
        const newUrl = pageUrl + ids[ids.length - 1];
        return newUrl
    };

    const handlerOnChange = (e) => {
        setNewPokemon({
            ...newPokemon,
            id: idCreator(),
            url: urlCreator(),
            [e.target.name]: e.target.value 
        })
    }


    const handlerOnClick = () => {
        addPokemon(newPokemon)
        navigate('/')
    }

  return (
    <div>
    <NaviComponent currentPage={'addPokemon'} />
      <h2>Registro de Pokemons</h2>
      <div>
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <span>Nombre: </span>
            <input type="text" name='nombre' onChange={handlerOnChange} />
        </div>
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <span>Altura: </span>
            <input type="text" name='altura' onChange={handlerOnChange} />
        </div>
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <span>Peso: </span>
            <input type="text" name='peso' onChange={handlerOnChange} />
        </div>
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <span>Tipo: </span>
            <input type="text" name='tipo' onChange={handlerOnChange} />
        </div>
        <button onClick={handlerOnClick}>Registrar Pokemon</button>
      </div>
    </div>
  )
}

export default AddPokemonPage
