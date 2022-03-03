import React from "react";

import footcon1 from "./images/icon-1.png";
import footcon2 from "./images/icon-2.png";
import footcon3 from "./images/icon-3.png";
import footcon4 from "./images/icon-4.png";
import footcon5 from "./images/icon-5.png";

const Footer = () => {
  return (
    <>
      <div className="w-100 footer_container pt-5">
        <div className="icons d-flex d-flex flex-column my-2 justify-content-center 
            align-items-center justify-content-sm-">
          <h3 className="text-center pt-5 col-8">
            Pavo is a mobile application for marketing automation and you can
            reach the team at
            <a className="text-decoration-none" href="">
              email@domain.com
            </a>
          </h3>
          <div className="icon d-flex my-3 mb-5 pb-5">
            <div className="d-flex bg-white p-2 mx-2 align-item-center rounded-circle footerIcon">
              <a href="#" className=" bg-white">
                <img src={footcon1} className="img-fluid " width="30" alt="..." />
              </a>
            </div>
            <div className="d-flex bg-white p-2 mx-2 align-item-center rounded-circle footerIcon">
              <a href="#" className=" bg-white">
                <img src={footcon2} className="img-fluid " width="30" alt="..." />
              </a>
            </div>
            <div className="d-flex bg-white p-2 mx-2 align-item-center rounded-circle footerIcon">
              <a href="#" className=" bg-white">
                <img src={footcon3} className="img-fluid " width="30" alt="..." />
              </a>
            </div>
            <div className="d-flex bg-white p-2 mx-2 align-item-center rounded-circle footerIcon">
              <a href="#" className=" border-1 bg-white">
                <img src={footcon4} className="img-fluid " width="30" alt="..." />
              </a>
            </div>
            <div className="d-flex bg-white p-2 mx-2 align-item-center rounded-circle footerIcon">
              <a href="#" className=" bg-white">
                <img src={footcon5} className="img-fluid " width="30" alt="..." />
              </a>
            </div>
          </div>
        </div>
          <div className=" d-flex mx-auto justify-content-evenly py-3 col-lg-12 col-10 align-items-center flex-column flex-lg-row flex-wrap flex-column flex-lg-row">
                <div className="article  d-flex justify-content-lg-around text-center flex-column flex-lg-row flex-wrap">
                    <a href="#" className="text-decoration-none mx-2 my-1 text-muted">Article Details</a>
                    <a href="#" className="text-decoration-none mx-2 my-1 text-muted">Terms & Conditions</a>
                    <a href="#" className="text-decoration-none mx-2 my-1 text-muted">Privacy Policy</a>
                </div>
                <div className="my-1 copyright">

                    <a href="#" className="text-decoration-none text-muted">Copyright © Your name</a>
                </div>
                <div className=" my-1 author">

                    <a href="#" className="text-decoration-none text-muted">Distributed by :Themewagon</a>
                </div>
          </div>


      </div>
    </>
  );
};

export default Footer;
