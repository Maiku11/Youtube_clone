import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
    const toggleMenu = useSelector((store) => store.app.isMenuOpen);

    return (
        toggleMenu && (
            <div className="p-5 shadow-lg w-48">
                <h1 className="font-bold">
                    <Link to="/">Home</Link>
                </h1>
                <ul>
                    <li>Music</li>
                    <li>Sports</li>
                    <li>Gaming</li>
                    <li>Movies</li>
                </ul>
                <h1 className="font-bold">Watch Later</h1>
                <ul>
                    <li>Music</li>
                    <li>Sports</li>
                    <li>Gaming</li>
                    <li>Movies</li>
                </ul>
                <h1 className="font-bold">Explore</h1>
                <ul>
                    <li>Trending</li>
                    <li>Shopping</li>
                    <li>Music</li>
                    <li>Movies</li>
                </ul>
                <h1 className="font-bold">Subscription</h1>
                <ul>
                    <li>Music</li>
                    <li>Sports</li>
                    <li>Gaming</li>
                    <li>Movies</li>
                </ul>
            </div>
        )
    );
};

export default SideBar;
