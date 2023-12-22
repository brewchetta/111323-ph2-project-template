import { NavLink } from 'react-router-dom'

function Navbar() {

    return (
        <div>

            <NavLink className={({isActive}) => isActive ? "red" : "green" } 
            to='/gifts-list'>All Gifts</NavLink>
            <NavLink className={({isActive}) => isActive ? "red" : "green" } 
            to='/new-gift'>New Gift</NavLink>

        </div>
    )

}

export default Navbar