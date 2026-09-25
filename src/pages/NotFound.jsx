import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <div className="not-found-container">
        <div className="not-found-content">
          <span className="not-found-code">404</span>

          <h1>Oops! Page not found</h1>

          <p>
            The page you're looking for doesn't exist or may have been moved
            somewhere else.
          </p>

          <Link to="/" className="not-found-button">
            Back to home
            <span>→</span>
          </Link>
        </div>

        <div className="not-found-illustration">
          {/* Add your illustration here later */}
          <img src="page-not-found.png" alt="" />
        </div>
      </div>
    </main>
  );
}
