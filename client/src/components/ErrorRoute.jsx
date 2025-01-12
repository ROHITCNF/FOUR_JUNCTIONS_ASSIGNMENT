import React from "react";

const ErrorRoute = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    textAlign: "center",
    backgroundColor: "#f8f9fa",
    color: "#343a40",
    fontFamily: "Arial, sans-serif",
  };

  const headingStyle = {
    fontSize: "6rem",
    margin: "0",
  };

  const paragraphStyle = {
    fontSize: "1.5rem",
    margin: "0.5rem 0",
  };

  const linkStyle = {
    marginTop: "1rem",
    padding: "0.5rem 1rem",
    backgroundColor: "#007bff",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "0.25rem",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>404</h1>
      <p style={paragraphStyle}>
        Oops! The page you're looking for doesn't exist.
      </p>
      <a href="/" style={linkStyle}>
        Go Back Home
      </a>
    </div>
  );
};

export default ErrorRoute;
