import { useCart } from "../context/CartContext";
import CartItems from "./CartItems";
import shopItems from "../data/items.json";

const Cart = ({ isOpen }) => {
    const { closeCart, cartItem } = useCart();

    return (
        <div
            className="cart-container flex f-column"
            style={{ display: isOpen ? "" : "none" }}
        >
            <div
                className="close-cart"
                onClick={() => {
                    closeCart();
                }}
            >
                X
            </div>
            <h2>Cart</h2>
            <div className="items flex f-between f-column">
                {cartItem.map((item) => {
                    return <CartItems key={item.id} {...item} />;
                })}
            </div>
            <h1 className="total">
                Total :{" "}
                <span>
                    {cartItem.reduce((total, cartItem) => {
                        const item = shopItems.find(
                            (i) => i.id === cartItem.id
                        );
                        return total + (item?.price || 0) * cartItem.quantity;
                    }, 0)}
                </span>
            </h1>
        </div>
    );
};

export default Cart;
