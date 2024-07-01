import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="flex f-around f-center">
            <div className="links flex">
                <Link to="/home" className="link">
                    Home
                </Link>
                <Link to="/store" className="link">
                    Store
                </Link>
                <Link to="/about" className="link">
                    About
                </Link>
                <Link to="/" className="link">
                    Logout
                </Link>
            </div>
            <div className="cart">
                Cart <sup>2</sup>
            </div>
        </nav>
    );
};

export default NavBar;
