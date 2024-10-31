import PropTypes from 'prop-types';

const Post = ({ post }) => {
    const { body, title, id } = post
    return (
        <div className="border-2 border-gray-400 bg-red-400 p-4 m-5 rounded-lg">
            <p className="font-semibold"><small>Id: {id}</small></p>
            <h1 className="text-xl font-medium">Tittle : {title}</h1>
            <p className="text-sm font-sans font-semibold"><span className="text-green-400 underline">Description</span> : {body}</p>
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.object
}

export default Post;