import { NavLink } from "react-router-dom"

function Navigation() {
    return (
        <div>
            <NavLink to='/' className='nav-home'>Home</NavLink>
            <NavLink to='/about' className='nav-about'>About</NavLink>
            <NavLink to='/pheebo-apps' className='nav-pheebo-apps'>Pheebo Apps</NavLink>
            <NavLink to='/contract-work' className='nav-contract-work'>Contract Work</NavLink>
            <button className='nav-contact'>Contact Us</button>
        </div>
    )
}


export default Navigation
