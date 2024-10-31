import { Outlet } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <h1>Navber</h1>
            <nav className="flex gap-5 ">
                <a className="hover:text-orange-400" href="">Home</a>
                <a className="hover:text-orange-400" href="">About Us</a>
                <a className="hover:text-orange-400" href="">Contact</a>
            </nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Navbar;