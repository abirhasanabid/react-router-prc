import { NavLink, Outlet, useNavigation } from "react-router-dom";
import './navbar.css'

const Navbar = () => {

    const navigation = useNavigation();
    console.log(navigation.state);
    
    return (
        <div>
            <h1>Navber</h1>
            <nav className="flex gap-5 ">
                <NavLink to='/home'>Home</NavLink>
                <NavLink to='/about'>About Us</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
                <NavLink to='/footer'>Footer</NavLink>
                <NavLink to='/users'>Users</NavLink>
                <NavLink to='/posts'>Posts</NavLink>
                <NavLink to='/albums'>Albums</NavLink>
                <NavLink to='/comments'>Comments</NavLink>
            </nav>
            {
                navigation.state === 'loading' ?<span className="loading loading-bars loading-lg"></span> : <Outlet></Outlet>
            }

        </div>
    );
};

export default Navbar;