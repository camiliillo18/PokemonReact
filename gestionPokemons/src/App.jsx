import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import NotFoundPage from './pages/NotFoundPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import AddPokemonPage from './pages/AddPokemonPage'
import PokemonDetails from './pages/PokemonDetails'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/addPokemon' element={<AddPokemonPage />} />
          <Route path='/pokemon/:id' element={<PokemonDetails />}></Route>
          <Route path='*' element={<NotFoundPage />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
