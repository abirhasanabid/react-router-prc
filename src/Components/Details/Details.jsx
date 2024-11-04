import {useLoaderData, useNavigate, useParams } from "react-router-dom";

const Details = () => {
    const details = useLoaderData();
    const { email, body } = details;

    const navigate = useNavigate();
    const {commentId} = useParams();
    console.log(commentId);

    const btn = {
        border: '2px solid gray',
        padding: '5px',
        borderRadius: '12px',
        width: '100%'
    };

    const handleGoBack  = () =>{
        navigate(-1);
    };


    return (
        <div style={btn}>
            <p className="font-semibold">Email : {email}</p>
            <p>{body}</p>
            <button style={btn} className='hover:bg-slate-600 hover:text-white font-serif font-semibold' onClick={handleGoBack}>Go_Back</button>
        </div>
    );
};

export default Details;