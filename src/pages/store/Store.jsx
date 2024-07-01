import NavBar from "../../components/NavBar";
import StoreItems from "../../data/items.json";
import StoreItem from "./StoreItem";

const Store = () => {
    return (
        <div className="pages-container flex f-column">
            <NavBar />
            <h2>Products</h2>
            <div className="items flex">
                {StoreItems.map((item) => {
                    return (
                        <div
                            className="item flex f-column f-center"
                            key={item.id}
                        >
                            <StoreItem {...item} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Store;
