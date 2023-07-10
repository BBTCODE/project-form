import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <br />
      <br />
      <nav className="navbar ">
        <div className="container">
          <a className="navbar-brand font-bold text-3xl" href="#">
            <h1>Aimbrill Techinfo</h1>
          </a>
          <buttontoolbar>
            <button
              const
              path="/Table"
              className="btn btn-primary bg-indigo-500 border-2 border-indigo-500 text-white rounded-full hover:bg-indigo-700 "
              type="submit"
              onClick={() => navigate("/Table")}
            >
              Employee List
            </button>
          </buttontoolbar>
        </div>
      </nav>
    </>
  );
};

export default Header;
