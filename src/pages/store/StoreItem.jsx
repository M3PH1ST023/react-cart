const StoreItem = ({ id, name, price, imageUrl }) => {
    const quantity = 0;
    return (
        <>
            <img src={imageUrl} />
            <div className="item-container flex f-between">
                <div className="item-content flex f-column">
                    <div className="item-name">{name}</div>
                    <div className="item-price">{price}</div>
                </div>
                {quantity == 0 ? (
                    <div className="add-to-cart flex f-center">+</div>
                ) : (
                    <div className="remove flex f-center">-</div>
                )}
            </div>
        </>
    );
};

export default StoreItem;
