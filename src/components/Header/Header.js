import { useState } from 'react'
import './Header.scss'
import { RiMenuFill } from 'react-icons/ri'
import { GrClose } from 'react-icons/gr'

const Header = () => {

    const [isActive, setActive] = useState(false)
    
    const activateMenu = () => {
        return setActive(!isActive)
    }
    return (
        <>
            <header className='header'>
                <h1 className='header__logotype'> Spotnify </h1>
                <RiMenuFill size={25} onClick={activateMenu} />
            </header>

            <nav className={isActive ? 'navigation active' : 'navigation hidden'} >
                <GrClose size={20} className='navigation__closeButton' onClick={activateMenu} />
                <ul>
                    <li> dashboard </li>
                    <li> favorites </li>
                    <li> log out </li>
                </ul>
            </nav>


        </>
    )
}

export default Header