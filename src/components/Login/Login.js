import {useState, useRef} from 'react'
import '../Login/Login.scss'

const Login = () => {



    return (
        <div className='form-container'>
            <h1>log in</h1>
            <form>
                <input name="email" type="text" placeholder='Email' autoFocus/>
                <input name="password" type="password" placeholder='Password'  />
                <button type="submit" className='form__button'>
                    Ingresar
                </button>
            </form>
        </div>
    )
}

export default Login;