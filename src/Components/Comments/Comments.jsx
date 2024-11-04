import { useLoaderData } from "react-router-dom";
import Comment from "../Comment/Comment";

const Comments = () => {

    const comments = useLoaderData();    

    return (
        <div className="grid lg:grid-cols-3 gap-5 md:grid-cols-2">
            {
                comments.map(comment => <Comment comment={comment} key={comment.id}></Comment>)
            }
        </div>
    );
};

export default Comments;