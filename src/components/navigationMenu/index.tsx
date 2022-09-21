import { NavLink } from 'react-router-dom';
export const NavigationMenu = () => {
    return (
        <header>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/search">Search</NavLink>
                <NavLink to="/about">About</NavLink>
            </nav>
        </header>
    )
}