import { toggleMenu } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_SUGG_API } from "../utils/constants";
import { cacheResult } from "../utils/searchSlice";

// import { Link } from "react-router-dom";

const Head = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestion] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const cacheState = useSelector((store) => store.search);

    const dispatch = useDispatch();

    useEffect(() => {
        const timer = setTimeout(() => {
            if (cacheState[searchQuery]) {
                setSuggestion(cacheState[searchQuery]);
            } else {
                getSearchQueryData();
            }
        }, 200);

        return () => clearTimeout(timer);
    }, [searchQuery]);

    const getSearchQueryData = async () => {
        const data = await fetch(YOUTUBE_SEARCH_SUGG_API + searchQuery);
        const json = await data.json();
        setSuggestion(json[1]);
        // console.log(json);
        dispatch(
            cacheResult({
                [searchQuery]: json[1],
            })
        );
    };

    const handleSideBarToggle = () => {
        dispatch(toggleMenu());
    };
    return (
        <div className="grid grid-flow-col p-5 shadow-lg items-center">
            <div className="flex col-span-2 items-center">
                <img
                    className="w-8 cursor-pointer"
                    alt="hamburgerLogo"
                    src="https://w7.pngwing.com/pngs/626/110/png-transparent-black-logo-computer-icons-hamburger-button-menu-new-menu-angle-text-rectangle.png"
                    onClick={handleSideBarToggle}
                />

                <img
                    className="h-8 ml-2"
                    alt="youtubeLogo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
                />
            </div>
            <div className="col-span-8 ">
                <div>
                    <input
                        type="text"
                        className="w-1/2 border border-gray-400 py-2 px-4 rounded-l-full"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={(event) => setSearchQuery(event.target.value)}
                        onFocus={() => setShowSuggestions(true)}
                        onBlur={() => setShowSuggestions(false)}
                    />
                    <button className="border border-gray-400 py-2 px-4 rounded-r-full hover:bg-gray-200">
                        🔍
                    </button>
                </div>
                {showSuggestions && (
                    <div className="absolute bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-100">
                        <ul>
                            {suggestions.map((suggestion) => (
                                <li
                                    className="py-2 px-3 shadow-sm hover:bg-gray-100"
                                    key={suggestion}
                                >
                                    {suggestion}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
            <div className="col-span-2">
                <img
                    className="h-8"
                    alt="userLogo"
                    src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg"
                />
            </div>
        </div>
    );
};

export default Head;
