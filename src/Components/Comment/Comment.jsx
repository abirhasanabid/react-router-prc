import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

const Comment = ({ comment }) => {
    const { id, name, body } = comment;
    const navigate = useNavigate();


    const btn = {
        border: '2px solid gray',
        padding: '5px',
        borderRadius: '12px',
        width: '100%'
    };

    const handleSeeDetails = () => {
        navigate(`/comment/${id}`);
    }

    return (
        <div className="card bg-base-100 p-4 rounded-lg shadow-xl flex-grow">

            <div className="card-body flex flex-col">
                <h1 className="font-bold text-emerald-400">{id}</h1>
                <h2 className="text-xl font-semibold">
                    {name}
                </h2>
                <p>{body}</p>
            </div>
            <Link to={`/comment/${id}`}> <button style={btn} className='hover:bg-slate-600 hover:text-white'>Details</button></Link>

            <button style={btn} className='hover:bg-slate-600 hover:text-white' onClick={handleSeeDetails}>See_Details</button>
        </div>

    );
};

Comment.propTypes = {
    comment: PropTypes.object
}

export default Comment;