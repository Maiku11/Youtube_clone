const ChatMessage = ({ name, message }) => {
    return (
        <div className="flex items-center shadow-md p-2">
            <img
                className="h-8 "
                alt="userLogo"
                src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg"
            />
            <span className="font-bold px-2">{name}</span>
            <span>{message}</span>
        </div>
    );
};

export default ChatMessage;
