import React from "react";
import detail1 from "./images/details-1.jpg";
import detail2 from "./images/details-2.jpg";
import detail3 from "./images/details-3.jpg";
import arrow from "./images/up-arrow.png";
const Section1= () => {
  return (
    <>
      <div className="container">
        <div className="card border-0 p-3 mb-3">
          <div className="row g-0">
            <div className="col-lg-6 d-flex justify-content-center align-items-center">
              <div className="p-lg-3 p-xl-5 py-5  card-body">
                <h1 className="card-title fw-bolder">
                  Results driven ground breaking technology
                </h1>
                <p className="card-text text-muted pt-2 fs-5">
                  Based on our team's extensive experience in developing line of
                  business applications and constructive customer feedback we
                  reached a new level of revenue.
                </p>
                <p className="card-text text-muted fs-5 py-1">
                  We enjoy helping small and medium sized tech businesses take a
                  shot at established Fortune 500
                </p>
              </div>
            </div>
            <div className="col-lg-6 p-lg-3 py-5 p-xl-5">
              <img src={detail1} className="img-fluid rounded-start" alt="..." />
            </div>
          </div>
        </div>
        <div className="card border-0 p-3 mb-3">
          <div className="row g-0">
            <div className="col-lg-6 p-lg-3 py-5 p-xl-5">
              <img src={detail2} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-lg-6 d-flex justify-content-center align-items-center">
              <div className="p-lg-3 p-xl-5 py-5  card-body">
                <h1 className="card-title fw-bolder">
                  Instant results for the marketing department
                </h1>
                <div className="card-text py-2 text-muted fs-5">
                  <p>Features that will help you and your marketers</p>
                  <p>Smooth learning curve due to the knowledge base</p>
                  <p>Ready out-of-the-box with minor setup settings</p>
                </div>
                <button className="btn rounded-pill px-4 me-3 py-2 btn-primary btn_purple">
                  Light Box
                </button>
                <button className="btn rounded-pill btn-light border border-secondary px-4 me-3 py-2">
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card border-0 p-3 mb-3">
          <div className="row g-0">
            <div className="col-lg-6 d-flex justify-content-center align-items-center">
              <div className="p-lg-3 p-xl-5 py-5  card-body">
                <h1 className="card-title fw-bolder">
                  Platform integration and life time free updates
                </h1>
                <p className="card-text pt-2 text-muted fs-5">
                  Get a glimpse of what this app can do for your marketing
                  automation and understand why current users are so excited
                  when using Pavo together with their teams.
                </p>
                <p className="py-1 card-text text-muted fs-5">
                  We will promptly answer any questions and honor your requests
                  based on the service level agreement
                </p>
              </div>
            </div>
            <div className="col-lg-6 p-lg-3 py-5 p-xl-5">
              <img src={detail3} className="img-fluid rounded-start" alt="..." />
            </div>
          </div>
        </div>
        <div className="container d-flex justify-content-center align-items-center mx-auto flex-wrap col-12">
          <div className="mx-5 d-flex align-items-center justify-content-center  flex-column">
            <h1 className="fw-bolder display-2">231</h1>
            <p className="text-muted">Happy Users</p>{" "}
          </div>
          <div className="mx-5 d-flex align-items-center justify-content-center  flex-column">
            <h1 className="fw-bolder display-2">385</h1> <p className="text-muted">Issues Solved</p>
          </div>
          <div className="mx-5 d-flex align-items-center justify-content-center  flex-column">
            <h1 className="fw-bolder display-2">159</h1> <p className="text-muted">Good Reviews</p>
          </div>
          <div className="mx-5 d-flex align-items-center justify-content-center  flex-column">
            <h1 className="fw-bolder display-2">127</h1> <p className="text-muted">Case Studies</p>
          </div>
          <div className="mx-5 d-flex align-items-center justify-content-center  flex-column">
            <h1 className="fw-bolder display-2">211</h1> <p className="text-muted">Orders Received</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section1;
