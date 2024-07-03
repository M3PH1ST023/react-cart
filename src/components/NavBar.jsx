import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useCart } from "../context/CartContext";

const NavBar = () => {
    const navigate = useNavigate();

    const { openCart, cartQuantity } = useCart();

    const logout = (e) => {
        e.preventDefault();
        toast.success("Logout successful !");
        setTimeout(() => {
            navigate("/");
        }, 2500);
    };

    return (
        <>
            <ToastContainer theme="colored" autoClose={2000} />
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
                    <Link onClick={logout} className="link">
                        Logout
                    </Link>
                </div>
                <div className="cart" onClick={() => openCart()}>
                    Cart <sup>{cartQuantity}</sup>
                </div>
            </nav>
        </>
    );
};

export default NavBar;
