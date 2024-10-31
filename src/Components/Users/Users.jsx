import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
    const users = useLoaderData();

    return (
        <div>
            <h2>This is users page</h2>
            <p>user Data : {users.length}</p>
            <div className="grid md:grid-cols-3">
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;

