import PropTypes from 'prop-types';

const Comment = ({ comment }) => {
    const { id, name, body } = comment
    return (
        <div className="card bg-base-100 p-4 rounded-lg shadow-xl">

            <div className="card-body">
                <h1 className="font-bold text-emerald-400">{id}</h1>
                <h2 className="text-xl font-semibold">
                    {name}
                </h2>
                <p>{body}</p>
            </div>
        </div>
    );
};

Comment.propTypes={
    comment: PropTypes.object
}

export default Comment;