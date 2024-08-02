import React from "react";
import Hirosection from "./Hirosection";
import H3 from "../component/IMAGES/h3.jpg";
import H2 from "../component/IMAGES/h2.jpg";
import H5 from "../component/IMAGES/h5.jpg";
import { Link } from "react-router-dom";

const NewsWeek = () => {
  return (
    <div>
      <Hirosection />
      <div class="container">
        <div class="row g-4">
          <div class="col-12 col-md-6 col-lg-4">
            <div class="card">
              <img src={H5} alt="" class="card-img-top c-img" />
              <div class="card-body">
                <h5 class="card-title">Upcoming Student Field Trip</h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                  consectetur est sint sit, omnis inventore magnam distinctio.
                </p>
                <div class="text-end">
                  <Link
                    to="/dashboard/readmore"
                    className="btn btn-outline-primary"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <div class="card">
              <img src={H2} alt="" class="card-img-top c-img" />
              <div class="card-body">
                <h5 class="card-title">Upcoming Student Field Trip</h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                  consectetur est sint sit, omnis inventore magnam distinctio
                  rem ut tempore consequuntur, unde quia aspernatur commodi
                  neque voluptatibus quibusdam illo doloribus.
                </p>
                <div class="text-end">
                  <Link
                    to="/dashboard/readmore"
                    className="btn btn-outline-primary"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4 ">
            <div class="card">
              <img src={H3} alt="" class="card-img-top c-img" />
              <div class="card-body">
                <h5 class="card-title txt-title">
                  Upcoming Matriculation Ceremony 2025
                </h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                  consectetur est sint sit, omnis inventore magnam distinctio
                  rem ut tempore consequuntur, unde quia aspernatur commodi
                  neque voluptatibus quibusdam illo doloribus.
                </p>
                <div class="text-end">
                  <Link
                    to="/dashboard/readmore"
                    className="btn btn-outline-primary"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsWeek;
