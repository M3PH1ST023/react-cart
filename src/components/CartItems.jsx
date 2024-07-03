import { useCart } from "../context/CartContext";
import storeItems from "../data/items.json";

const CartItems = ({ id, quantity }) => {
    const { removeFromCart, increaseCartQuantity, decreaseCartQuantity } =
        useCart();
    const item = storeItems.find((item) => item.id === id);
    if (item == null) {
        return null;
    }
    return (
        <div className="item flex f-between">
            <div className="item-desc flex">
                <img src={item.imageUrl} />
                <div className="flex f-column">
                    <span>{item.name}</span>
                    <span>{item.price}</span>
                </div>
            </div>
            <div className="price flex f-center">{item.price * quantity}</div>
            <div className="buttons flex f-center">
                <button onClick={() => increaseCartQuantity(id)}>+</button>
                {quantity}
                <button onClick={() => decreaseCartQuantity(id)}>-</button>
                <button onClick={() => removeFromCart(id)}>X</button>
            </div>
        </div>
    );
};

export default CartItems;
