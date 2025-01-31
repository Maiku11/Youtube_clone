import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
    const [searchParams] = useSearchParams();
    // console.log("params", searchParams.get("v"));
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeMenu());
    }, []);
    return (
        <div className="flex flex-col w-full">
            <div className="p-4 flex w-full">
                <div>
                    <iframe
                        width="1050"
                        height="600"
                        src={
                            "https://www.youtube.com/embed/" +
                            searchParams.get("v")
                        }
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="w-full">
                    <LiveChat />
                </div>
            </div>
            <div className="w-[1080px]">
                <CommentsContainer />
            </div>
        </div>
    );
};

export default WatchPage;
