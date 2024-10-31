import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <h1>Navber</h1>
            <nav className="flex gap-5 ">
                <a className="hover:text-orange-400" href="/home">Home</a>
                <a className="hover:text-orange-400" href="/about">About Us</a>
                <a className="hover:text-orange-400" href="/contact">Contact</a>
                <Link to='footer'>Footer</Link>
            </nav>

            <Outlet></Outlet>
        </div>
    );
};

export default Navbar;