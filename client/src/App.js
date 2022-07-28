import React from "react";
import { useSelector } from "react-redux";
import { Home } from "./screens/Home.js";

export const App = () => {
  const loading = useSelector((state) => state.loading);
  return (
    <>
      <Home />
      {loading && (
        <div
          className="position-absolute d-flex justify-content-center align-items-center top-0 w-100 h-100"
          style={{ zIndex: "10000", backgroundColor: "#00000013" }}
        >
          <div className="spinner-border" role="status">
            <span className="sr-only"></span>
          </div>
        </div>
      )}
    </>
  );
};
