import { createContext, useContext } from "react";

const CartContext = createContext({});

const useCartContext = () => {
    return useContext(CartContext);
};

const CartProvider = ({ children }) => {
    return <CartContext.Provider value={{}}>{children}</CartContext.Provider>;
};
export default CartProvider;
