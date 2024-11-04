import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Comment = ({ comment }) => {
    const { id, name, body } = comment;

    const btn = {
        border: '2px solid gray',
        padding: '5px',
        borderRadius: '12px',
        width: '100%'
    };
    return (
        <div className="card bg-base-100 p-4 rounded-lg shadow-xl">

            <div className="card-body">
                <h1 className="font-bold text-emerald-400">{id}</h1>
                <h2 className="text-xl font-semibold">
                    {name}
                </h2>
                <p>{body}</p>
            </div>
            <Link to={`/comment/${id}`}> <button style={btn}>Details</button></Link>
        </div>

    );
};

Comment.propTypes = {
    comment: PropTypes.object
}

export default Comment;