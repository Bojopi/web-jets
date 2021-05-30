import React, { Fragment } from "react";
import { Link } from 'react-router-dom';
import { Slide } from "react-slideshow-image";

import "../css/info_jets.css";
import "react-slideshow-image/dist/styles.css";

const properties = {
  duration: 3000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  autoplay: true,
};

const Informacion = () => {
  return (
    <Fragment>
      <div className="info-jets">
        <div className="historia">
          <h1>¿QUÉ ES JETS?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            pharetra neque ac velit lobortis, non aliquet arcu iaculis. Vivamus
            dapibus ultricies nisi, vitae venenatis diam finibus in. Fusce
            maximus ipsum non neque porttitor gravida. Vivamus ultricies dapibus
            suscipit. Fusce ornare sit amet sapien a pulvinar. Suspendisse
            vehicula posuere ligula in pharetra. Vestibulum et pulvinar felis.
            Cras luctus libero odio, quis dignissim urna faucibus sit amet.
            Aenean id finibus diam. Donec viverra id lorem eget auctor.
            Suspendisse vulputate tincidunt justo nec sodales. Curabitur ac
            tellus porta, fringilla velit ut, posuere nibh. Nulla quis justo
            iaculis, aliquam magna sit amet, suscipit libero. Quisque sed
            interdum nulla. Sed egestas dolor arcu, ut tristique orci
            pellentesque dictum. Interdum et malesuada fames ac ante ipsum
            primis in faucibus. Proin nec ornare eros, in ornare nunc.
            Vestibulum at dui lectus. Duis pellentesque sit amet mauris vitae
            malesuada. Donec luctus erat quis leo suscipit, vel mattis sapien
            tempus. Nulla lobortis, tortor non laoreet volutpat, sapien lectus
            blandit mi, eu pharetra mauris urna id ante. Nunc at pretium odio.
            Integer malesuada ante vel imperdiet aliquam.
          </p>
        </div>
        <div className="cont-info">
          <div className="cronograma">
            <div className="tabla">
              <Slide {...properties}>
                <div className="dias">
                  <div>
                    <h1>IMAGEN 1</h1>
                  </div>
                </div>
                <div className="dias">
                  <div>
                    <h1>IMAGEN 2</h1>
                  </div>
                </div>
                <div className="dias">
                  <div>
                    <h1>IMAGEN 3</h1>
                  </div>
                </div>
                <div className="dias">
                  <div>
                    <h1>IMAGEN 4</h1>
                  </div>
                </div>
              </Slide>
            </div>
          </div>
          <div className="buttons">
            <button className="memorias">
              <Link to="/memorias">MEMORIAS</Link>
            </button>
            <button className="certificados">CERTIFICADOS</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Informacion;
