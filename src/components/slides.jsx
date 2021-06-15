import React from "react";
import { Slide } from "react-slideshow-image";

import "../css/slides.css";
import "react-slideshow-image/dist/styles.css";

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
    <div className="cont-slide" id="inicio">
      <div className="slide">
        <Slide {...properties}>
          <div className="each-slide">
            <div>
              <img src="https://i.postimg.cc/Qt4RNyhj/AAAAAAAAAAAAAAAA.png" alt="" />
            </div>
          </div>
          <div className="each-slide">
            <div>
            <img src="https://i.postimg.cc/SNT1JbRv/slide2.jpg" alt="" />
            </div>
          </div>
          <div className="each-slide">
            <div>
            <img src="https://i.postimg.cc/BZCVfK0s/slide3.jpg" alt="" />
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Slides;
