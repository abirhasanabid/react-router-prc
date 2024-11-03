import PropTypes from 'prop-types';
const Album = ({ album }) => {
    const { title, id } = album;

    return (
        <div className="card bg-orange-400 shadow-xl mt-4 p-5 m-5 rounded-lg ">
            <div className="card-body">
                <h2 className="card-title">Title : {title}</h2>
                <p>Uniqe Id : {id}</p>
            </div>
        </div>
    );
};

Album.propTypes ={
    album : PropTypes.object
}

export default Album;