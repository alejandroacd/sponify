import {useState, useRef, useEffect} from 'react'
import '../Login/Login.scss'
import { CLIENT_ID, REDIRECTION_URI, SPOTIFY_ENDPOINT } from '../../credentials'
import { Navigate, Link } from 'react-router-dom'
import { BsSpotify } from 'react-icons/bs'

const Login = () => {
    
    const token = localStorage.getItem('token')
    const finalEndpoint = `${SPOTIFY_ENDPOINT}response_type=token&client_id=${CLIENT_ID}&redirect_uri=${REDIRECTION_URI}`


    return (

        <>
        {token && <Navigate to="/Dashboard"/>}
       
        <div className='form-container'>
            <h1>Search artists albums in Spotify. Just connect it!</h1>
                                
                 <a href={finalEndpoint}> 
                    Log in with Spotify <BsSpotify size={15} />
                </a>
        
        </div>
        </>
    )

}

export default Login;