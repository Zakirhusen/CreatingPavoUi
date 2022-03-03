import React from "react";

const Pricelist = () => {
  return (
    <>
      <div className="h-auto priceList mt-0 position-relative mb-5">
        <div
          className="position-absolute bottom-0  w-100 bg-white"
          style={{ height: "5rem" }}
        ></div>
        <div className="cotainer px-1 px-md-3 px-lg-4 mx-md-3 mx-lg-4 mx-1">
          <h1 className="text-light">Pricing options for all budgets</h1>
          <p className="mb-5 text-white  col-md-10 col-12 col-lg-8 mx-auto">
            Our pricing plans are setup in such a way that any user can start
            enjoying Pavo without worrying so much about costs. They are
            flexible and work for any type of industry
          </p>

          <div className="container mt-5 col-lg-12 mx-auto justify-content-center align-items-center col-12 d-flex flex-wrap ">
            <div className="card rouded-3 col-xl-3  col-10 my-4 col-md-5  mx-3">
              <div className="position-relative card-body py-5 ">
                <div className="card-title priceList_title fs-3 fw-bolder">
                  STANDARD
                </div>
                <div className="d-flex justify-content-center align-items-center  ">
                  <span className="fs-3 pe-2">$</span>
                  <span className="display-1 lh-1 lh-1 fw-bolder ">29</span>
                </div>
                <div className="text-muted">monthly</div>
                <p className="text-muted py-2 fs-6">
                  This basic package covers the marketing needs of small
                  startups
                </p>
                <ul className=" ps-lg-3 ps-1 space-y-2 text-left">
                  <li className="d-flex">
                    <i
                      className="fw-bolder me-1 bi-chevron-right"
                      style={{ "fontSize": "1rem", color: "#594cda" }}
                    ></i>
                    <p className="text-muted text-start fs-6">
                      List building and relations
                    </p>
                  </li>
                  <li className="d-flex">
                    <i
                      className="fw-bolder me-1 bi-chevron-right"
                      style={{ "font-size": "1rem", color: "#594cda" }}
                    ></i>
                    <p className="text-muted text-start fs-6">
                      Seamless platform integration
                    </p>
                  </li>
                  <li className="d-flex">
                    <i
                      className="fw-bolder me-1 bi-chevron-right"
                      style={{ "font-size": "1rem", color: "#594cda" }}
                    ></i>
                    <p className="text-muted text-start fs-6">
                      Great performance on devices
                    </p>
                  </li>
                  <li className="d-flex">
                    <i
                      className="fw-bolder me-1 bi-chevron-right"
                      style={{ "font-size": "1rem", color: "#594cda" }}
                    ></i>
                    <p className="text-muted text-start fs-6">
                      Community support and videos
                    </p>
                  </li>
                </ul>
                <div className="position-absolute top-100 start-50 translate-middle d-flex justify-content-center align-items-center">
                  <button className="btn btn-sm rounded-pill px-5 py-3   d-flex  align-items-center border-0 btn_purple fw-bolder text-light">
                    Download
                  </button>
                </div>
              </div>
            </div>
            <div className="card rouded-3 col-xl-3  col-10 my-4 col-md-5  mx-3">
              <div className="position-relative card-body py-5 ">
                <div className="card-title priceList_title fs-3 fw-bolder">
                  ADVANCED
                </div>
                <div className="dis d-flex justify-content-center align-items-center  ">
                  <span className="fs-3 pe-2">$</span>
                  <span className="display-1 lh-1 fw-bolder ">39</span>
                </div>
                <div className="text-muted">monthly</div>
                <p className="text-muted py-2 fs-6">
                  This is a more advanced package suited for medium companies
                </p>
                <ul className=" ps-lg-3 ps-1 space-y-2 text-left">
                  <li className="d-flex">
                    <i
                      className="fw-bolder me-1 bi-chevron-right"
                      style={{ "font-size": "1rem", color: "#594cda" }}
                    ></i>
                    <p className="text-muted text-start fs-6">
                      List building and relations
                    </p>
                  </li>
                  <li className="d-flex">
                    <i
                      className="fw-bolder me-1 bi-chevron-right"
                      style={{ "font-size": "1rem", color: "#594cda" }}
                    ></i>
                    <p className="text-muted text-start fs-6">
                      Seamless platform integration
                    </p>
                  </li>
                  <li className="d-flex">
                    <i
                      className="fw-bolder me-1 bi-chevron-right"
                      style={{ "font-size": "1rem", color: "#594cda" }}
                    ></i>
                    <p className="text-muted text-start fs-6">
                      Great performance on devices
                    </p>
                  </li>
                  <li className="d-flex">
                    <i
                      className="fw-bolder me-1 bi-chevron-right"
                      style={{ "font-size": "1rem", color: "#594cda" }}
                    ></i>
                    <p className="text-muted text-start fs-6">
                      Community support and videos
                    </p>
                  </li>
                </ul>
                <div className="position-absolute top-100 start-50 translate-middle d-flex justify-content-center align-items-center">
                  <button className="btn btn-sm rounded-pill px-5 py-3   d-flex  align-items-center border-0 btn_purple fw-bolder text-light">
                    Download
                  </button>
                </div>
              </div>
            </div>
            <div className="card rouded-3 col-xl-3  col-10 my-4 col-md-5  mx-3">
              <div className="position-relative card-body py-5 ">
                <div className="card-title priceList_title fs-3 fw-bolder">
                  COMPLETE
                </div>
                <div className="dis d-flex justify-content-center align-items-center  ">
                  <span className="fs-3 pe-2">$</span>
                  <span className="display-1 lh-1 fw-bolder ">49</span>
                </div>
                <div className="text-muted">monthly</div>
                <p className="text-muted py-2 fs-6">
                  This is a comprehensive package designed for big organizations
                </p>
                <ul className=" ps-lg-3 ps-1 space-y-2 text-left">
                  <li className="d-flex">
                    <i
                      className="fw-bolder me-1 bi-chevron-right"
                      style={{ "font-size": "1rem", color: "#594cda" }}
                    ></i>
                    <p className="text-muted text-start fs-6">
                      List building and relations
                    </p>
                  </li>
                  <li className="d-flex">
                    <i
                      className="fw-bolder me-1 bi-chevron-right"
                      style={{ "font-size": "1rem", color: "#594cda" }}
                    ></i>
                    <p className="text-muted text-start fs-6">
                      Seamless platform integration
                    </p>
                  </li>
                  <li className="d-flex">
                    <i
                      className="fw-bolder me-1 bi-chevron-right"
                      style={{ "font-size": "1rem", color: "#594cda" }}
                    ></i>
                    <p className="text-muted text-start fs-6">
                      Great performance on devices
                    </p>
                  </li>
                  <li className="d-flex">
                    <i
                      className="fw-bolder me-1 bi-chevron-right"
                      style={{ "font-size": "1rem", color: "#594cda" }}
                    ></i>
                    <p className="text-muted text-start fs-6">
                      Community support and videos
                    </p>
                  </li>
                </ul>
                <div className="position-absolute top-100 start-50 translate-middle d-flex justify-content-center align-items-center">
                  <button className="btn btn-sm rounded-pill px-5 py-3   d-flex  align-items-center border-0 btn_purple fw-bolder text-light">
                    Download
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricelist;

{
  /* <div className="card">
  <div className="card-body">
    <div className="card-title">STANDARD</div>
    <div className="price">
      <span className="currency">$</span>
      <span className="value">29</span>
    </div>
    <div className="frequency">monthly</div>
    <p>This basic package covers the marketing needs of small startups</p>
    <ul className="list mb-7 space-y-2 text-left">
      <li className="d-flex">
        <i className="fas bi-chevron-right"></i>
        <div>List building and relations</div>
      </li>
      <li className="d-flex">
        <i className="fas bi-chevron-right"></i>
        <div>Seamless platform integration</div>
      </li>
      <li className="d-flex">
        <i className="fas bi-chevron-right"></i>
        <div>Great performance on devices</div>
      </li>
      <li className="d-flex">
        <i class="fas bi-chevron-right"></i>
        <div>Community support and videos</div>
      </li>
    </ul>
    <div class="button-wrapper">
      <a class="btn-solid-reg page-scroll" href="#download">
        Download
      </a>
    </div>
  </div>
</div>; */
}
