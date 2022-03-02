import React, { useState } from "react";

import Data from "./Data";
import CarouselItem from "./CarouselItem";

const Carousel = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const updateWidth=()=>{
    const updatedWidth=window.innerWidth
    setWidth(updatedWidth);
  }
  window.addEventListener('resize',updateWidth)

  // console.log(width);
  return (
    <>
      <div className="vh-75 py-5 mt-5 w-100 carousel_slider">
        <div>
          <h1 className="text-center">What do users think about Pavo</h1>
        </div>
        <div
          id="carouselExampleControls"
          className="carousel  carousel-dark py-3  slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner  mx-auto container">
            {Data.map((elem, index) => {
                let temp=index%(Data.length);
                let temp1=(index+1)%(Data.length);
                let temp2=(index+2)%(Data.length);
                if(width>1150){
                  return (
                <div key={elem.Title} className={`carousel-item container ${index===0?"active":""}`}>
                  <div className="d-flex col-xl-10 col-10 mx-auto flex-row ">
                    <CarouselItem imgSrc={Data[temp].Img} description={Data[temp].Description} title={Data[temp].Title}/>
                    <CarouselItem imgSrc={Data[temp1].Img} description={Data[temp1].Description} title={Data[temp1].Title}/>
                    <CarouselItem imgSrc={Data[temp2].Img} description={Data[temp2].Description} title={Data[temp2].Title}/>
                  </div>
                </div>
              );
                }else if(width>800){
                  return (
                <div key={elem.Title} className={`carousel-item container ${index===0?"active":""}`}>
                  <div className="d-flex col-xl-10 col-10 mx-auto flex-row ">
                    <CarouselItem imgSrc={Data[temp].Img} description={Data[temp].Description} title={Data[temp].Title}/>
                    <CarouselItem imgSrc={Data[temp1].Img} description={Data[temp1].Description} title={Data[temp1].Title}/>
                  </div>
                </div>
              );}else {
                  return (
                <div key={elem.Title} className={`carousel-item container ${index===0?"active":""}`}>
                  <div className="d-flex col-xl-10 col-10 mx-auto flex-row ">
                    <CarouselItem imgSrc={Data[temp].Img} description={Data[temp].Description} title={Data[temp].Title}/>
                  </div>
                </div>
              );
                }
                })}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next text-secondary"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Carousel;

{
  /* <div className="carousel-item container  ">
              <div className="d-flex col-xl-10 col-12 mx-auto flex-row ">
                <div className="col">
                  <div className="card_detail py-5 card border-0  d-flex justify-contet-around align-items-center flex-column">
                    <img
                      src={testimonial1}
                      width="70"
                      className="img-fluid rounded-circle"
                      alt="..."
                    />
                    <div className="card-body">
                      <p className="card-text text-muted text-center fst-italic fw-">
                        It's been so fun to work with Pavo, I've managed to
                        integrate it properly into my business flow and it's
                        great
                      </p>
                      <h5 className="card-title text-dark fw-bolder fs-5 text-center">
                        Jude Thorn - Designer
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col ">
                  <div className="card_detail py-5 card border-0  d-flex justify-contet-center align-items-center flex-column">
                    <img
                      src={testimonial1}
                      width="70"
                      className="img-fluid rounded-circle"
                      alt="..."
                    />
                    <div className="card-body">
                      <p className="card-text text-muted text-center fst-italic fw-">
                        It's been so fun to work with Pavo, I've managed to
                        integrate it properly into my business flow and it's
                        great
                      </p>
                      <h5 className="card-title text-dark fw-bolder fs-5 text-center">
                        Jude Thorn - Designer
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card_detail py-5 card border-0  d-flex justify-contet-center align-items-center flex-column">
                    <img
                      src={testimonial1}
                      width="70"
                      className="img-fluid rounded-circle"
                      alt="..."
                    />
                    <div className="card-body">
                      <p className="card-text text-muted text-center fst-italic fw-">
                        It's been so fun to work with Pavo, I've managed to
                        integrate it properly into my business flow and it's
                        great
                      </p>
                      <h5 className="card-title text-dark fw-bolder fs-5 text-center">
                        Jude Thorn - Designer
                      </h5>
                    </div>
                  </div>
                </div>
               
              </div>
            </div> */
}
