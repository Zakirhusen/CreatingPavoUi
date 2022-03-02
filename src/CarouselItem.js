import React from 'react'

const CarouselItem = (props) => {
  return (
    <>
        {/* <div className={`carousel-item container ${props.status}` }>
              <div className="d-flex col-xl-10 col-12 mx-auto flex-row "> */}
                <div className="col">
                  <div className="card_detail py-5 card border-0  d-flex justify-contet-around align-items-center flex-column">
                    <img
                      src={props.imgSrc}
                      width="70"
                      className="img-fluid rounded-circle"
                      alt="..."
                    />
                    <div className="card-body">
                      <p className="card-text text-muted text-center fst-italic fw-">
                        {props.description}
                      </p>
                      <h5 className="card-title text-dark fw-bolder fs-5 text-center">
                      {props.title}
                      </h5>
                    </div>
                  </div>
                </div>
                {/* <div className="col ">
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
                */}
              {/* </div>
            </div> */}
    </>
  )
}

export default CarouselItem