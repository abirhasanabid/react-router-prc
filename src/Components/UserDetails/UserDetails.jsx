import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData()
    const {name,email}= user
    return (
        <div className='border-2 border-gray-500 p-4 m-5 rounded-lg bg-stone-400'>
            <h2 className='text-xl font-bold'>Name : {name}</h2>
            <h2><small>Email : {email}</small></h2>
        </div>
    );
};

export default UserDetails;