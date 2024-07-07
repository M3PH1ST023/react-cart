import { createContext, useContext, useState } from "react";
import Cart from "../components/Cart";

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cartItem, setCartItem] = useState([]);
    const [cartDisplay, setCartDisplay] = useState(false);

    function getItemQuantity(id) {
        return cartItem.find((item) => item.id === id)?.quantity || 0;
    }

    function increaseCartQuantity(id) {
        setCartItem((currentItem) => {
            if (currentItem.find((item) => item.id === id) == null) {
                return [...currentItem, { id, quantity: 1 }];
            } else {
                return currentItem.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 };
                    } else {
                        return item;
                    }
                });
            }
        });
    }

    function decreaseCartQuantity(id) {
        setCartItem((currentItem) => {
            if (currentItem.find((item) => item.id === id)?.quantity === 1) {
                return currentItem.filter((item) => item.id !== id);
            } else {
                return currentItem.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 };
                    } else {
                        return item;
                    }
                });
            }
        });
    }

    function removeFromCart(id) {
        setCartItem((currentItem) => {
            return currentItem.filter((item) => item.id !== id);
        });
    }

    const cartQuantity = cartItem.reduce(
        (quantity, item) => item.quantity + quantity,
        0
    );

    const openCart = () => {
        setCartDisplay(true);
    };

    const closeCart = () => {
        setCartDisplay(false);
    };

    return (
        <CartContext.Provider
            value={{
                getItemQuantity,
                increaseCartQuantity,
                decreaseCartQuantity,
                removeFromCart,
                cartItem,
                cartQuantity,
                openCart,
                closeCart,
            }}
        >
            {children}
            <Cart isOpen={cartDisplay} />
        </CartContext.Provider>
    );
};
