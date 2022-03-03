import React from "react";
import favicon1 from "./images/features-icon-1.svg";
import favicon2 from "./images/features-icon-2.svg";
import favicon3 from "./images/features-icon-3.svg";
import favicon4 from "./images/features-icon-4.svg";
import favicon5 from "./images/features-icon-5.svg";
import favicon6 from "./images/features-icon-6.svg";

const dataArray = [
  {
    heading: "Platform Integration",
    description:
      "You sales force can use the app on any smartphone platform without compatibility issues",
    imgSrc: favicon1,
  },
  {
    heading: "Easy On Resources",
    description:
      "Works smoothly even on older generation hardware due to our optimization efforts",
    imgSrc: favicon2,
  },
  {
    heading: "Great Performance",
    description:
      "Optimized code and innovative technology insure no delays and ultra-fast responsiveness",
    imgSrc: favicon3,
  },
  {
    heading: "Multiple Languages",
    description:
      "Choose from one of the 40 languages that come pre-installed and start selling smarter",
    imgSrc: favicon4,
  },
  {
    heading: "Free Updates",
    description:
      "Don't worry about future costs, pay once and receive all future updates at no extra cost",
    imgSrc: favicon5,
  },
  {
    heading: "Community Support",
    description:
      "Register the app and get acces to knowledge and ideas from the Pavo online community",
    imgSrc: favicon6,
  },
];

const Details = () => {
  return (
    <>
      <div className="container-md   pt-5 my-5 col-12 col-xl-10">
        <div className="  my-lg-5 text-center pb-lg-5 px-0 mx-0 pb-5 px-0 px-xl-5 mb-5">
          <h2 className=" mx-xl-3 mx-1 px-1 px-xl-5 text-center ">
            Team management mobile apps don't get better than Pavp.It's probably
            the best app in the world for this purpose. Don't hesitate to give
            it a try today and you will fall in love with it
          </h2>
        </div>
        <div className="row row-cols-1 row-cols-lg-3 mx-auto col-12 row-cols-md-2 row-cols-sm-1 g-4">
          {dataArray.map((dataItem) => {
            const { heading, description, imgSrc } = dataItem;
            return (
              <div className="col" key={imgSrc}>
                <div className="card_detail py-5  px-xl-5 card border-0  d-flex justify-contet-center align-items-center flex-column">
                  <img
                    src={imgSrc}
                    width="70"
                    className="img-fluid"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bolder fs-5 text-center">
                      {heading}
                    </h5>
                    <p className="card-text text-muted text-center">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Details;
