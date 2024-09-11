const CommentsData = [
    {
        name: "Maiku",
        test: "lorem epsum dfg fghejdsi serwtyhsj edujiwd sgh",
        replies: [
            {
                name: "Maiku",
                test: "lorem epsum dfg fghejdsi serwtyhsj edujiwd sgh",
                replies: [
                    {
                        name: "Maiku",
                        test: "lorem epsum dfg fghejdsi serwtyhsj edujiwd sgh",
                        replies: [],
                    },
                    {
                        name: "Maiku",
                        test: "lorem epsum dfg fghejdsi serwtyhsj edujiwd sgh",
                        replies: [
                            {
                                name: "Maiku",
                                test: "lorem epsum dfg fghejdsi serwtyhsj edujiwd sgh",
                                replies: [],
                            },
                            {
                                name: "Maiku",
                                test: "lorem epsum dfg fghejdsi serwtyhsj edujiwd sgh",
                                replies: [],
                            },
                            {
                                name: "Maiku",
                                test: "lorem epsum dfg fghejdsi serwtyhsj edujiwd sgh",
                                replies: [],
                            },
                            {
                                name: "Maiku",
                                test: "lorem epsum dfg fghejdsi serwtyhsj edujiwd sgh",
                                replies: [],
                            },
                        ],
                    },
                ],
            },
            {
                name: "Maiku",
                test: "lorem epsum dfg fghejdsi serwtyhsj edujiwd sgh",
                replies: [],
            },
            {
                name: "Maiku",
                test: "lorem epsum dfg fghejdsi serwtyhsj edujiwd sgh",
                replies: [],
            },
        ],
    },
    {
        name: "Maiku",
        test: "lorem epsum dfg fghejdsi serwtyhsj edujiwd sgh",
        replies: [
            {
                name: "Maiku",
                test: "lorem epsum dfg fghejdsi serwtyhsj edujiwd sgh",
                replies: [],
            },
            {
                name: "Maiku",
                test: "lorem epsum dfg fghejdsi serwtyhsj edujiwd sgh",
                replies: [],
            },
            {
                name: "Maiku",
                test: "lorem epsum dfg fghejdsi serwtyhsj edujiwd sgh",
                replies: [],
            },
        ],
    },
    {
        name: "Maiku",
        test: "lorem epsum dfg fghejdsi serwtyhsj edujiwd sgh",
        replies: [],
    },
    {
        name: "Maiku",
        test: "lorem epsum dfg fghejdsi serwtyhsj edujiwd sgh",
        replies: [],
    },
    {
        name: "Maiku",
        test: "lorem epsum dfg fghejdsi serwtyhsj edujiwd sgh",
        replies: [],
    },
    {
        name: "Maiku",
        test: "lorem epsum dfg fghejdsi serwtyhsj edujiwd sgh",
        replies: [],
    },
];

const Comment = ({ data }) => {
    const { name, test, replies } = data;
    return (
        <div className="flex shadow-sm bg-gray-100 p-1 m-2 rounded-lg">
            <img
                className="w-12 h-12 rounded-full"
                alt="user"
                src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg"
            />
            <div className="px-3">
                <p className="font-bold">{name}</p>
                <p>{test}</p>
            </div>
        </div>
    );
};

const CommentsList = ({ comments }) => {
    return comments.map((comment, index) => (
        <div key={index}>
            <Comment data={comment} />
            <div className="pl-5 ml-5 border border-l-gray-300">
                <CommentsList comments={comment.replies} />
            </div>
        </div>
    ));
};
const CommentsContainer = () => {
    return (
        <div className="px-5 py-2">
            <h1 className="font-bold">Comments</h1>
            <CommentsList comments={CommentsData} />
        </div>
    );
};

export default CommentsContainer;
