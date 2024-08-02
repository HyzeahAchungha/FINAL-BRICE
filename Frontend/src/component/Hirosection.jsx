import React from 'react'
import {Carousel} from 'react-bootstrap'
import H1 from "../component/IMAGES/h1.jpeg";
import H4 from "../component/IMAGES/h4.jpg";
import H2 from "../component/IMAGES/h2.jpg";
import "./news.css";
const Hirosection = () => {
  return (
    <div>
      <Carousel className='carousel slide mb-4'>
                <Carousel.Item interval={1000} className="carousel-item c-tem">
                    <img
                        className="d-block w-100 c-img"
                        src={H4}
                        alt="First slide"
                    />
                    <Carousel.Caption className="carousel-caption top-0 mt-4 none d-md-block">
                    <p className="mt-5 fs-3 text-uppercase">HUIB Calender 2025</p>
                    <h2 class="display-1 fw-bolder text-capitalize">Opening Ceremory</h2>
                    <a href="#" class="btn btn-primary px-4 py-2 mt-5">Read More</a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500} className="carousel-item c-tem">
                    <img
                        className="d-block w-100 c-img"
                        src={H1}
                    />
                    <Carousel.Caption className="carousel-caption top-0 mt-4 none d-md-block">
                    <p className="mt-5 fs-3 text-uppercase">HUIB Calender 2025</p>
                    <h2 class="display-1 fw-bolder text-capitalize">Opening Ceremory</h2>
                    <a href="#" class="btn btn-primary px-4 py-2 mt-5">Read More</a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-item c-tem">
                    <img
                        className="d-block w-100 c-img"
                        src={H2}
                        alt="Third slide"
                    />
                    <Carousel.Caption className="carousel-caption top-0 mt-4 none d-md-block">
                    <p className="mt-5 fs-3 text-uppercase">HUIB Calender 2025</p>
                    <h2 class="display-1 fw-bolder text-capitalize">Opening Ceremory</h2>
                    <a href="#" class="btn btn-primary px-4 py-2 mt-5">Read More</a>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
    </div>
  )
}

export default Hirosection
