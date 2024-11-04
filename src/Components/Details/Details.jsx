import { useLoaderData } from "react-router-dom";

const Details = () => {
    const details = useLoaderData();
    const { email, body } = details;

    const btn = {
        border: '2px solid gray',
        padding: '5px',
        borderRadius: '12px',
        width: '100%'
    };
    
    return (
        <div style={btn}>
            <p className="font-semibold">Email : {email}</p>
            <p>{body}</p>
        </div>
    );
};

export default Details;