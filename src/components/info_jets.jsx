import React, { Fragment } from "react";
import { Slide } from 'react-slideshow-image'

import "../css/info_jets.css";
import 'react-slideshow-image/dist/styles.css'

const properties = {
    duration: 3000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
}


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
            Integer malesuada ante vel imperdiet aliquam. Aliquam quam libero,
            condimentum sed risus quis, porttitor pharetra nunc. Suspendisse
            elementum eros interdum ante auctor, eu varius nibh venenatis.
            Aliquam velit lectus, accumsan non rhoncus ut, ullamcorper id
            sapien. Vestibulum venenatis pulvinar tristique. Sed sit amet metus
            non ligula venenatis consequat. Nullam mauris magna, imperdiet vitae
            tellus vitae, vulputate dapibus justo. Cras et neque a lacus pretium
            fringilla eget et elit. Cras sed aliquam ante, et dapibus urna. Cras
            posuere feugiat sapien, vitae dictum ligula laoreet vel. Nunc
            molestie turpis metus, a bibendum elit convallis eget. Mauris
            lobortis metus sed imperdiet eleifend. Duis ut arcu non quam mattis
            lacinia. Maecenas tincidunt ipsum felis, vitae egestas velit semper
            a. Nulla facilisi. Etiam elementum, purus nec faucibus aliquet,
            justo erat porttitor augue, et lacinia felis nulla vel leo. Maecenas
            egestas ligula enim, in malesuada turpis dignissim sed. In hac
            habitasse platea dictumst. Mauris ultrices nibh at bibendum cursus.
            Quisque purus nulla, sollicitudin ac ex a, eleifend ullamcorper
            augue. Quisque non maximus libero.{" "}
          </p>
        </div>
        <div className="cronograma">
          <div className="tabla">
            <Slide {...properties}>
              <div className="dias">
                <div>
                  <h1>COSA 1</h1>
                </div>
              </div>
              <div className="dias">
                <div>
                  <h1>COSA 2</h1>
                </div>
              </div>
              <div className="dias">
                <div>
                  <h1>COSA 3</h1>
                </div>
              </div>
              <div className="dias">
                <div>
                  <h1>COSA 4</h1>
                </div>
              </div>
            </Slide>
          </div>
          <div className="buttons">
              <button>MEMORIAS</button>
              <button>CERTIFICADOS</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Informacion;
