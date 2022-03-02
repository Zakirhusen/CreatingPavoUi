import React from "react";
import appleBtnWhite from "./images/btn-white.png";
import playstoreBtnWhite from "./images/btn-red.png";
import footerAbove from "./images/footer-above.png";

const FooterAbove = () => {
  return (
    <>
      <div className="container footer-above  my-5">
        <div className="container d-flex  justify-content-around align-items-center flex-wrap">
          <div className="col-lg-5  col-10 img">
            <img src={footerAbove} className="img-fluid" alt="..." />
          </div>
          <div className="card col-lg-5 col-10 mt-4 bg-transparent border-0">
            <h2 className="card-title fw- 6 text-center text-sm-start">
            Team management mobile applications don’t get much better than Pavo. Download it today
            </h2>
            <div className="d-flex flex-wrap my-2 justify-content-evenly justify-content-lg-start justify-content-md-start justify-content-sm- container"
            >
              <button className="btn btn rounded-pill px-5 py-3  my-2 btn-primary d-flex me-xl-3 me-3 me-sm-3 align-items-center border-0 btn_purple fw-bolder text-light">
                <img src={appleBtnWhite} className="pe-2" width="28" alt="" />
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
      </div>
    </>
  );
};

export default FooterAbove;
