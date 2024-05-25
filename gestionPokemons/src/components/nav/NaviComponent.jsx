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
    <nav style={{ display: 'flex', flexDirection: 'row', gap: 5}}>
        
        {
            currentPage 
            && currentPage !== 'home'
            && (
                <div>
                    <Link to={'/'}>Home</Link>
                    <span> | </span>
                </div>
            )
        }
        {
            currentPage 
            && currentPage !== 'addPokemon'
            && (
                <div>
                    <Link to={'/addPokemon'}>Registrar un Pokemon</Link>
                    <span> | </span>
                </div>
            )
        }
        {
            currentPage 
            && currentPage !== 'contacto'
            && (
                <div>
                    <Link to={'/contact'}>Contacto</Link>
                    <span> | </span>
                </div>
            )
        }
        {
            currentPage 
            && currentPage !== 'notFound'
            && (
                <div>
                    <Link to={'/notfound'}>Not Found</Link>
                    <span> | </span>
                </div>
            )
        }
        <Link to={'/login'}>Cerrar sesión</Link>
        <span> | </span>
            {
                userLogged
                && (
                    <div>
                        <span>Hola, {userLogged.username}</span>
                        <span> | </span>
                    </div>
                )
            }

    </nav>
  )
}

export default NaviComponent
