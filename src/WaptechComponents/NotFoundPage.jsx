import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div className="NotFound">
      <h3>Error 404</h3>
      <p>Page Not Found</p>
      <Link to="/" style={{}}>
        Back to Home
      </Link>
    </div>
  );
}
export default NotFound;
