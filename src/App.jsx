import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Home from "./pages/Home";
import Error404 from "./pages/Error404";
import Store from "./pages/store/Store";
import About from "./pages/About";
import { CartProvider } from "./context/CartContext";

const App = () => {
    return (
        <div className="container">
            <CartProvider>
                <BrowserRouter>
                    <Routes>
                        {/* AUTH */}
                        <Route index element={<Login />} />
                        <Route path="/signup" element={<Signup />} />

                        {/* PAGES */}
                        <Route path="/home" element={<Home />} />
                        <Route path="/store" element={<Store />} />
                        <Route path="/about" element={<About />} />

                        {/* ERROR 404 */}
                        <Route path="*" element={<Error404 />} />
                    </Routes>
                </BrowserRouter>
            </CartProvider>
        </div>
    );
};

export default App;
