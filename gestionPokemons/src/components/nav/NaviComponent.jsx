import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getUserLogged } from '../../core/store/Store'

const NaviComponent = (props) => {
    const [userLogged, setUserLogged] = useState(undefined)
    const getUserLoggedFromServer = () => {
        const aux = getUserLogged()
        setUserLogged(aux)
    }
    useEffect(() => {
        getUserLoggedFromServer()
    }, [])
    
    const {currentPage} = props
  return (
    <nav className='navBarLinks'>
        
        {
            currentPage 
            && currentPage !== 'home'
            && (
                <div>
                    <Link to={'/'}>Home</Link>
                </div>
            )
        }
        {
            currentPage 
            && currentPage !== 'addPokemon'
            && (
                <div>
                    <Link to={'/addPokemon'}>Registrar un Pokemon</Link>
                </div>
            )
        }
        {
            currentPage 
            && currentPage !== 'contacto'
            && (
                <div>
                    <Link to={'/contact'}>Contacto</Link>
                </div>
            )
        }
        {
            currentPage 
            && currentPage !== 'details'
        }
    </nav>
  )
}

export default NaviComponent
