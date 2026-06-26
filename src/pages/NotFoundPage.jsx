import { Link } from "react-router-dom";
import "../styles/notfound.css";

function NotFoundPage() {
  return (
    <div className="notfound-page">
      <h1>404</h1>

      <h2>Oops! Page Not Found</h2>

      <p>
        The page you are looking for does not exist.
      </p>

      <Link to="/">
        <button>Go Back Home</button>
      </Link>
    </div>
  );
}

export default NotFoundPage;