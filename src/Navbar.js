import React from "react";
import favicon from "./images/logo.svg";
import navicon from "./images/nav-icon1.png";
import navicon1 from "./images/nav-icon.png";
import header from "./images/header.png";
import appleBtnWhite from "./images/btn-white.png";
import playstoreBtnWhite from "./images/btn-red.png";

const Navbar = () => {
  return (
    <div className="nav_header   w-100 col-12 min-vh-100 border-2">
      <div className="container  pt-3 nav_bg">
        <div className="d-block  w-100">
          <div className="col-sm-11  mx-auto">
            <nav className="navbar   navbar-expand-md navbar-light ">
              <div className="container-fluid ps-3">
                {/* <div className="ms-1"> */}
                <a className="navbar-brand " href="#">
                  <img
                    src={favicon}
                    className="img-fluid "
                    width="120"
                    alt=""
                  />
                </a>
                {/* </div> */}

                <button
                  className="navbar-toggler  border-0"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavDropdown"
                  aria-controls="navbarNavDropdown"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarNavDropdown"
                >
                  <ul className="navbar-nav  ms-auto">
                    <li className=" ps-2 nav-item">
                      <a
                        className="nav-link active fw-bolder"
                        aria-current="page"
                        href="#"
                      >
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link fw-bolder" href="#">
                        Features
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className=" nav-link fw-bolder" href="#">
                        Details
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link fw-bolder" href="#">
                        Pricing
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link fw-bolder dropdown-toggle"
                        href="#"
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Drop
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdownMenuLink"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link fw-bolder" href="#">
                        Download
                      </a>
                    </li>
                    <li className="nav-item ">
                      <a className="nav-link  fw-bolder" href="#">
                        <img src={navicon} width="20" alt="" />
                      </a>
                    </li>
                    <li className="nav-item ">
                      <a className="nav-link  fw-bolder" href="#">
                        <img src={navicon1} width="20" alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className="container mt-5 pt-5 header_sub_part ">
        <div className="border-0 card mb-3 bg-transparent">
          <div className="row justify-content-around g-0">
            <div className="col-md-5 d-flex align-items-center">
              <div
                className="d-flex flex-wrap justify-content-center justify-content-md-start   card-body"
              >
                <h1 className="card-title display-4 text-center text-sm-start fw-bold">
                  Team management mobile application
                </h1>
                <blockquote className=" text-muted  text-center text-sm-start  text-opacity-25 mt-4 blockquote">
                  Start getting things done together with your team based on
                  Pavo's revolutionary team management features
                </blockquote>
                <div
                  className="d-flex flex-wrap  my-2 
                justify-content-evenly justify-content-lg-start justify-content-md-start justify-content-sm-start 
                container"
                >
                  <button className="btn btn rounded-pill px-5 py-3  my-2 btn-primary d-flex me-xl-3 me-3 me-sm-3 align-items-center border-0 btn_purple fw-bolder text-light">
                    <img
                      src={appleBtnWhite}
                      className="pe-2"
                      width="28"
                      alt=""
                    />
                    Download
                  </button>
                  <button className="btn my-2 rounded-pill px-5 py-3  btn-primary d-flex me-3 align-items-center btn_red fw-bolder border-0 text-light">
                    <img
                      src={playstoreBtnWhite}
                      className="pe-2"
                      width="25"
                      alt=""
                    />
                    Download
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <img src={header} className="img-fluid rounded-start" alt="..." />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
