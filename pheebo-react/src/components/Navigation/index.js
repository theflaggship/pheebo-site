import { NavLink } from "react-router-dom"
import './Navigation.css'

function Navigation() {
    return (
        <div className='navbar'>
            <div className='nav-logo-container'>
                <img src='/pheebo-site/graphics/logo.svg' className='nav-logo' alt='pheebo logo' />
            </div>
            <div className='nav-links'>
                <NavLink to='/' className='nav-home'>Home</NavLink>
                <NavLink to='/about' className='nav-about'>About</NavLink>
                <NavLink to='/pheebo-apps' className='nav-pheebo-apps'>Pheebo Apps</NavLink>
                <NavLink to='/contract-work' className='nav-contract-work'>Contract Work</NavLink>
                <button className='nav-contact'>Contact Us</button>
            </div>
        </div>
    )
}


export default Navigation
