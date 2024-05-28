import React from 'react'
import NaviComponent from '../components/nav/NaviComponent'
import PokemonList from '../components/pokemonList/PokemonList'

const HomePage = () => {
  return (
    <div>
        <NaviComponent currentPage={'home'}/>
        <PokemonList />
    </div>
  )
}

export default HomePage
