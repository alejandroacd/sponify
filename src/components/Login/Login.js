import {useState, useRef, useEffect} from 'react'
import '../Login/Login.scss'
import { Navigate, Link } from 'react-router-dom'
import { BsSpotify } from 'react-icons/bs'

const Login = () => {
    
    const token = localStorage.getItem('token')
    const finalEndpoint = `${process.env.REACT_APP_SPOTIFY_ENDPOINT}response_type=token&client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECTION_URI}`


    return (

        <div className='login'>
        {token && <Navigate to="/Dashboard"/>}
       
        <div className='form-container'>
            <h1>Search artists albums in Spotify. Just connect it!</h1>
                                
                 <a href={finalEndpoint}> 
                    Log in with Spotify <BsSpotify size={15} />
                </a>
        
        </div>

        <div className='footer'>
            <p>Created by <br/>
            <span>Alejandro Contreras</span> </p>

            <p>2022</p>
        </div>
        </div>
    )

}

export default Login;