import React from "react";

const HomepageHeader = (props) => {
  return (
    <div className="w-100">
      <header className="d-flex justify-content-between align-items-center fixed-top mw pt-4 pt-md-5 px-3 px-sm-5">
        <div className="d-flex justify-content-start align-items-start">
          <img
            src="/images/homepage/qrate-light-logo.png"
            alt="Logo"
            onClick={() => props.onClick("StartPage", "FirstPage")}
          />
          <div className="input-group ml-5 search">
            <input
              type="text"
              className="form-control light-bg p-3"
              placeholder="Search Qrate"
              aria-label="Search"
            />
            <div className="input-group-append p-2 border border-left-0 light-bg">
              <i className="fa fa-search text-light"></i>
            </div>
          </div>
        </div>
        <div className="d-none d-md-flex">
          <button
            className="btn bg-transparent text-light px-4"
            id="login"
            onClick={() => props.onClick("ConfirmEmail", "FirstPage")}
          >
            Log In
          </button>
          <button
            className="btn btn-light text-black px-4"
            id="signup"
            onClick={() => props.onClick("GetStarted", "FirstPage")}
          >
            Sign up
          </button>
        </div>
      </header>
    </div>
  );
};

export default HomepageHeader;
