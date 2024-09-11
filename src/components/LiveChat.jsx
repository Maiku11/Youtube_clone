import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName } from "../utils/helper";
import { makeString } from "../utils/helper";

const LiveChat = () => {
    const dispatch = useDispatch();
    const [liveMessage, setLiveMessage] = useState("");
    const chatMessages = useSelector((store) => store.chat.messages);

    useEffect(() => {
        const i = setInterval(() => {
            dispatch(
                addMessage({
                    name: generateRandomName(),
                    message: makeString(20),
                })
            );
        }, 2000);

        return () => clearInterval(i);
    }, []);
    return (
        <>
            <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
                <div>
                    {chatMessages.map((chat, index) => (
                        <ChatMessage
                            name={chat.name}
                            message={chat.message}
                            key={index}
                        />
                    ))}
                </div>
            </div>
            <form
                className="w-full p-2 ml-2 border border-black flex"
                onSubmit={(e) => {
                    e.preventDefault();

                    dispatch(
                        addMessage({
                            name: "Maiku",
                            message: liveMessage,
                        })
                    );
                    setLiveMessage("");
                }}
            >
                <input
                    type="text"
                    className="w-60 border border-black px-2"
                    value={liveMessage}
                    onChange={(e) => setLiveMessage(e.target.value)}
                />
                <button className="px-4 mx-2 bg-green-100">Send</button>
            </form>
        </>
    );
};

export default LiveChat;
