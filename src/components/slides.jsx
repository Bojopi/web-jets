import React from "react";
import { Slide } from "react-slideshow-image";

import "../css/slides.css";
import "react-slideshow-image/dist/styles.css";

const properties = {
  duration: 2000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  autoplay: true,
};

const Slides = () => {
  return (
    <div className="cont-slide">
      <div className="slide">
        <Slide {...properties}>
          <div className="each-slide">
            <div>
              <h1>COSA 1</h1>
            </div>
          </div>
          <div className="each-slide">
            <div>
              <h1>COSA 2</h1>
            </div>
          </div>
          <div className="each-slide">
            <div>
              <h1>COSA 3</h1>
            </div>
          </div>
          <div className="each-slide">
            <div>
              <h1>COSA 4</h1>
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Slides;
