import { useState } from "react";
import { Link, useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="navbar navbar-expand-lg navbar-dark bg-warning sticky-top"
        style={{
          
          height: "80px",
        }}
      >
        <div className="container">
          <Link
            className="navbar-brand fw-bold fs-3 text-shadow-lg"
            to="/"
            style={{  }}
          >
            ☔ Monsoon Recipe Hub
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#nav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse  " id="nav">
            <ul className="navbar-nav ms-auto fs-5 fw-semibold bg-warning bg-opacity-75 rounded-4 p-2 ">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/">
                  Home🏡
                </Link>
              </li>
              <li className="nav-item ">
                <button
                  className="btn btn-link nav-link text-white"
                  to="/add-recipe"
                  onClick={() => navigate("/add-recipe")}
                >Upload Recipe⬆️
                
                </button>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/my-recipes">
                  My Recipes
                </Link>
              </li>
              <li className="nav-item ">
                <button
                  className="btn btn-link nav-link text-white"
                  to="/login"
                  
                >
                 Login
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
