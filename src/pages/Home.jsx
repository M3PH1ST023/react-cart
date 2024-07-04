import NavBar from "../components/NavBar";
import homeBg from "../assets/images/home-bg.jpg";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="pages-container flex f-center f-column">
            <NavBar />
            <h2 className="heading">BOOK STORE</h2>
            <div className="content">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
            </div>
            <Link className="explore" to="/store">
                Explore Products ...
            </Link>
            <img src={homeBg} className="home-bg" />
        </div>
    );
};

export default Home;
