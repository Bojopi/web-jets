import React from "react";
import { Slide } from "react-slideshow-image";

import "../css/slides.css";
import "react-slideshow-image/dist/styles.css";

//imagenes
import slide1 from '../images/slides/slide1.jpeg'
import slide2 from '../images/slides/slide2.jpeg'
import slide3 from '../images/slides/slide3.jpeg'

const properties = {
  duration: 5000,
  transitionDuration: 800,
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
              <img src={slide1} alt="" />
            </div>
          </div>
          <div className="each-slide">
            <div>
            <img src={slide2} alt="" />
            </div>
          </div>
          <div className="each-slide">
            <div>
            <img src={slide3} alt="" />
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Slides;
