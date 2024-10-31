import PropTypes from 'prop-types';

const User = ({ user }) => {
    const { id, name, username, email } = user;
    return (
        <div className='border-2 border-gray-500 p-4 m-5 rounded-lg bg-stone-400'>
            <h3 className='font-semibold'>User Id : {id}</h3>
            <h2 className='text-xl font-bold'>Name : {name}</h2>
            <h2><small>UserName : {username}</small></h2>
            <h2><small>Email : {email}</small></h2>
        </div>
    );
};

User.propTypes = {
    user: PropTypes.object
}

export default User;