import React from "react";

const Footer = () => {
  return (
    <>
      <hr className="text-muted" />
      <nav className="navbar mt-2">
        <div className="container">
          <a className="navbar-brand font-medium text-xl " href="/">
            <h2>Aimbrill Techinfo</h2>
            <h6 className="text-muted text-xs">
              {" "}
              copyright &copy; 2021 Aimbrill TechinfoAll | All rights reserved
            </h6>
          </a>

          <div className="flex justify-center item-center w-auto border-0 outline-0 rounded-xl shadow-xl p-2 bg-slate-50">
            <div className="input-group">
              <input
                type="text"
                className="form-control border-0 outline-none w-auto p-2 bg-slate-50 cursor-pointer"
                placeholder="Enter Your Mail"
                aria-label="Example input"
                aria-describedby="button-addon1"
              />
            </div>
            <button
              className="btn btn-primary rounded-full bg-indigo-500  hover:bg-indigo-700 border-2 border-indigo-500 px-3 "
              type="button"
              id=""
              data-mdb-ripple-color="dark"
            >
              Subscribe
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Footer;
