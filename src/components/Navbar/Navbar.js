import {NavLink} from 'react-router-dom';
import './Navbar.css'

const Navbar = ()=>{
    return(
        <div className="Navbar">
            <ul>
                <li><NavLink to='/report'>REPORT / AUDIT</NavLink></li>
                <li><NavLink to='/expenses'>EXPENSES</NavLink></li>
                <li><NavLink to='/clist'>CLIENTS</NavLink></li>
                <li><NavLink to='/'>LOGOUT</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar