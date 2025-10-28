import React from "react";
import ResponsiveAppBar from "../components/NavBar";
const NotFoundPage = () => {
  return (
    <>
      <ResponsiveAppBar />
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
    </>
  );
};

export default NotFoundPage;
