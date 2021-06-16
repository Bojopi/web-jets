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
              <img src="https://i.postimg.cc/ZnwFb44q/BANNER1.png" alt="" />
            </div>
          </div>
          <div className="each-slide">
            <div>
            <img src="https://i.postimg.cc/rsVN2K6b/BANNER2.png" alt="" />
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Slides;
