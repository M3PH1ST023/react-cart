import { useCart } from "../../context/CartContext";

const StoreItem = ({ id, name, price, imageUrl }) => {
    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
    } = useCart();
    const quantity = getItemQuantity(id);
    return (
        <>
            <img src={imageUrl} />
            <div className="item-container flex f-between">
                <div className="item-content flex f-column">
                    <div className="item-name">{name}</div>
                    <div className="item-price">{price}</div>
                </div>
                {quantity == 0 ? (
                    <div
                        className="add-to-cart flex f-center"
                        onClick={() => increaseCartQuantity(id)}
                    >
                        +
                    </div>
                ) : (
                    <div
                        className="remove flex f-center"
                        onClick={() => removeFromCart(id)}
                    >
                        -
                    </div>
                )}
            </div>
        </>
    );
};

export default StoreItem;
