import { Component } from "react";
import "./ErrorBoundary.css";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, info) {
    console.log("Error caught by boundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <div className="error-boundary-card">
            <div className="error-boundary-icon">!</div>

            <span className="error-boundary-code">500</span>

            <h2>Something went wrong</h2>

            <p>
              We couldn't load this page properly. Please try again or return to
              the homepage.
            </p>

            <button
              className="error-boundary-button"
              onClick={() => this.setState({ hasError: false })}
            >
              Try again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
