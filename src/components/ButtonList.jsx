import Button from "./Button";

const ButtonList = () => {
    const buttonList = [
        "All",
        "Music",
        "Comedy clubs",
        "Sports",
        "Gaming",
        "News",
        "Podcast",
        "Live",
        "Dramedy",
        "Thoughts",
    ];
    return (
        <div className="flex">
            {buttonList.map((item) => (
                <Button name={item} key={item} />
            ))}
        </div>
    );
};

export default ButtonList;
