import React from 'react'
import '../Login/Login.scss'
import { Navigate } from 'react-router-dom'
import { BsSpotify } from 'react-icons/bs'
import { useEffect } from 'react'



const Login = () => {
    
    const token = localStorage.getItem('token')
    const finalEndpoint = `${process.env.REACT_APP_SPOTIFY_ENDPOINT}response_type=token&client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=http://localhost:3000/redirection`

    useEffect(() => {
        console.log(finalEndpoint)
    },[])
    return (

        <div className='login'>
        {token && <Navigate to="/dashboard"/>}
       
        <div className='form-container'>
            <h1>Search artists albums in Spotify. Just connect it!</h1>
                                
                 <a href={finalEndpoint}> 
                    Log in with Spotify <BsSpotify size={15} />
                </a>
        
        </div>


        </div>
    )

}

export default Login;