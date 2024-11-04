import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            <h1>Oops!!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                {
                    error.statusText || error.message
                }
            </p>
            <Link to='/'><button className="text-2xl font-bold">Home</button></Link>
        </div>
    );
};

export default ErrorPage;