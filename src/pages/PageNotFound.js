// 3rd Party Librarires
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const PageNotFound = () => (
    <div className="text-center mt-5 pt-5">
        <h1>Page Not Found!</h1>
        <Link to="/">
            <Button variant="secondary" size="sm">
                Go To Home Page
            </Button>
        </Link>
    </div>
);

export default PageNotFound;
