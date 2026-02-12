import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-foreground">404</h1>
      <p className="text-lg text-foreground/70 mt-4 text-pretty text-center max-w-xs">
        Oops! The page you're looking for doesn't exist. Please check the URL or
        return to the homepage.
      </p>
    </div>
  );
};

export default NotFound;
