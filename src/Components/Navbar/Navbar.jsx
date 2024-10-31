import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <h1>Navber</h1>
            <nav className="flex gap-5 ">
                <Link to='/home'>Home</Link>
                <Link to='/about'>About Us</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/footer'>Footer</Link>
                <Link to='/users'>Users</Link>
                <Link to='/posts'>Posts</Link>
            </nav>

            <Outlet></Outlet>
        </div>
    );
};

export default Navbar;