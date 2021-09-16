import { NavLink } from "react-router-dom"
import './Navigation.css'
import ContactUsModal from "../ContactUsModal"

function Navigation() {
    return (
        <div className='navbar'>
            <div className='nav-logo-container'>
                <img src='https://i.imgur.com/ECiuoDw.png' className='nav-logo' alt='pheebo logo' />
            </div>
            <div className='nav-links'>
                <NavLink to='/' className='nav-home'>home</NavLink>
                <NavLink to='/pheebo-apps' className='nav-pheebo-apps'>pheebo apps</NavLink>
                <NavLink to='/contract-work' className='nav-contract-work'>contract work</NavLink>
                <NavLink to='/about' className='nav-about'>about</NavLink>
                <ContactUsModal />
            </div>
        </div>
    )
}


export default Navigation
