import { useEffect } from 'react';
import './Redirection.scss'
import { Navigate } from 'react-router-dom'

const Redirection = () => {

    useEffect(() => {

        // después hacer que esto sea guarde en localStorage y redireccione a Dashboard :) 
        const code = window.location.hash.split("#")[1].split('=')[1]
        localStorage.setItem('token', code)

        setTimeout(() => {
            window.location = '/dashboard'
        }, 1500)
    }, [])

    return (
        <>
        <div className='loading'> 
        <h1>Redireccionando...</h1>
        </div>
        </>
    )
}

export default Redirection