import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import LoginPage from './pages/LoginPage'
import NotFoundPage from './pages/NotFoundPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import AddPokemonPage from './pages/AddPokemonPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/addPokemon' element={<AddPokemonPage />} />
          <Route path='*' element={<NotFoundPage />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
