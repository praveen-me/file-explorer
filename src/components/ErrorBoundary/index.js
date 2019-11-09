import React, { Component } from "react";

// Component for handling error UI.
const ErrorUI = () => {
  // Setting display to "flex" from "grid" when Error Boundary appears
  const rootElm = document.getElementById("root");
  rootElm.style.display = "flex";

  return (
    <div className="err-page">
      <img
        src="https://raw.githubusercontent.com/praveen-me/docket/master/client/src/images/oops.png"
        alt="OOPS"
      />
      <a href="/">Go to Home Page</a>
    </div>
  );
};

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  // When Error boundary caches object on the behalf of current updated state
  static getDerivedStateFromError(error) {
    return {
      hasError: true
    };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    return this.state.hasError ? <ErrorUI /> : this.props.children;
  }
}

export default ErrorBoundary;
