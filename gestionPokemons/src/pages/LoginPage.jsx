import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signIn } from '../core/store/Store'

const LoginPage = () => {
    const [userToSignIn, setUserToSignIn] = useState({})
    const [errorsValidated, setErrorsValidated] = useState(undefined)
    const navigate = useNavigate()

    const handlerOnChange = (e) => {
        setUserToSignIn({
            ...userToSignIn,
            [e.target.name]: e.target.value
        }) 
    }

    const checks = () => {
        const errors = []
        if(userToSignIn){
            if(
                !userToSignIn.username 
                || userToSignIn.username !== 'admin'
                || !userToSignIn.password 
                || userToSignIn.password !== 'admin'
            ){
                errors.push({
                    name: 'user',
                    type: 'text',
                    description: 'Usuario o contraseña no válidos'
                })
            }
        }else{
            alert('Error, usuario undefined')
        }
        return errors.length > 0 ? errors : undefined
    }

    // const singIn = () => {
    //     const errors = checks()
    //     if(errors){
    //         const textErrors = errors.filter(e => e.type == 'text')
    //         setErrorsValidated(textErrors)
    //     }else{
    //         signIn(userToSignIn)
    //         navigate('/')
    //     }
    // }
  return (
    <div>
        {
            errorsValidated && (
                <div>
                    <span>{errorsValidated[0].description}</span>
                </div>
            )
        }
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <span>Username:</span>
            <input type="text" name='username' onChange={handlerOnChange}/>
        </div>
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <span>Password:</span>
            <input type="password" name='password' onChange={handlerOnChange}/>
        </div>
        <button onClick={singIn}>Iniciar sesión</button>
    </div>
  )
}

export default LoginPage
