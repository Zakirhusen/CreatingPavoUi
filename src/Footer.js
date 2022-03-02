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
        <div
          className="icons d-flex d-flex flex-column my-2 justify-content-center 
            align-items-center justify-content-sm-"
        >
          <h3 className="text-center">
            Pavo is a mobile application for marketing automation and you can
            reach the team at
            <a className="text-decoration-none" href="">
              email@domain.com
            </a>
          </h3>
          <div className="icon my-3">
            <a href="#">
              <img src={footcon1} class="img-fluid mx-3 border rounded-cirlcle bg-white" width="25" alt="..." />
            </a>
            <a href="#">
              <img src={footcon2} class="img-fluid mx-3 rounded-cirlcle bg-white" width="25" alt="..." />
            </a>
            <a href="#">
              <img src={footcon3} class="img-fluid mx-3 rounded-cirlcle bg-white" width="25" alt="..." />
            </a>
            <a href="#">
              <img src={footcon4} class="img-fluid mx-3 rounded-cirlcle bg-white" width="25" alt="..." />
            </a>
            <a href="#">
              <img src={footcon5} class="img-fluid mx-3 rounded-cirlcle bg-white" width="25" alt="..." />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
