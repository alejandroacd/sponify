import { useEffect, useState } from 'react'
import './Header.scss'
import { RiMenuFill } from 'react-icons/ri'
import { GrClose } from 'react-icons/gr'
import { Link, useNavigate} from 'react-router-dom'

const Header = () => {
    
   
    const [token, setToken] = useState(false)
    const [isActive, setActive] = useState(false)
    let code = localStorage.getItem('token')
    const nav = useNavigate()


    const redirectHome = () => {
        nav('/login ')
    }
    const logout = () => {

       localStorage.clear()
       window.location = "/"

    }



    useEffect(() => {
        console.log(process.env.REACT_APP_CLIENT_ID)

        console.log(code)
        if(!code){
            setToken('')
        } 
        if(code) {
            setToken(code)
        }

    },[localStorage.getItem('token')])



    
    const activateMenu = () => {
        return setActive(!isActive)
    }


    return (
        <>
            <header className='header' style={{justifyContent: token ? 'space-between' : 'center' }}>
                <h1 className='header__logotype' onClick={() => redirectHome()}> sponify </h1>
                <RiMenuFill size={25} onClick={activateMenu} style={{display: token ? 'block' : 'none' }} />
            </header>

            {token &&  <nav className={isActive ? 'navigation active' : 'navigation hidden'} >
                <GrClose size={20} className='navigation__closeButton' onClick={activateMenu} />
                <ul>
                    <Link onClick={activateMenu} to="/dashboard"> <li> dashboard</li> </Link>
                    <Link onClick={activateMenu} to="/favorites"> <li> favorites  </li> </Link>
                    <Link  to="/" onClick={logout}> <li> log out </li></Link>
                </ul>
            </nav>
            }


        </>
    )
}

export default Header