import React, { Fragment } from "react";
import { Slide } from "react-slideshow-image";

import "../css/galeria.css";
import "react-slideshow-image/dist/styles.css";

//imagenes
// import img1 from "../images/img1.jpg";
// import IMG_7748 from "../images/galeria/INAUGURACION/IMG_7748.JPG";
// import IMG_7758 from "../images/galeria/INAUGURACION/IMG_7758.JPG";
// import IMG_7763 from "../images/galeria/INAUGURACION/IMG_7763.JPG";
// import IMG_7778 from "../images/galeria/INAUGURACION/IMG_7778.JPG";
// import IMG_7780 from "../images/galeria/INAUGURACION/IMG_7780.JPG";
// import IMG_7810 from "../images/galeria/INAUGURACION/IMG_7810.JPG";

// import DSC_0002 from "../images/galeria/FORO/DSC_0002.JPG";
// import DSC_0014 from "../images/galeria/FORO/DSC_0014.JPG";
// import IMG_8348 from "../images/galeria/FORO/IMG_8348.JPG";
// import IMG_8382 from "../images/galeria/FORO/IMG_8382.JPG";
// import IMG_8384 from "../images/galeria/FORO/IMG_8384.JPG";
// import IMG_8387 from "../images/galeria/FORO/IMG_8387.JPG";

// import IMG_8396 from "../images/galeria/POSTAS/IMG_8396.JPG";
// import IMG_8438 from "../images/galeria/POSTAS/IMG_8438.JPG";
// import IMG_8442 from "../images/galeria/POSTAS/IMG_8442.JPG";
// import IMG_8488 from "../images/galeria/POSTAS/IMG_8488.JPG";
// import IMG_8528 from "../images/galeria/POSTAS/IMG_8528.JPG";
// import IMG_8556 from "../images/galeria/POSTAS/IMG_8556.JPG";

// import DSC_0008 from "../images/galeria/COLEGIOS/DSC_0008.JPG";
// import DSC_0013 from "../images/galeria/COLEGIOS/DSC_0013.JPG";
// import DSC_0017 from "../images/galeria/COLEGIOS/DSC_0017.JPG";
// import IMG_9207 from "../images/galeria/COLEGIOS/IMG_9207.JPG";
// import IMG_9222 from "../images/galeria/COLEGIOS/IMG_9222.JPG";
// import IMG_9252 from "../images/galeria/COLEGIOS/IMG_9252.JPG";

const properties = {
  // duration: 2000,
  transitionDuration: 1000,
  infinite: true,
  indicators: true,
  arrows: true,
  autoplay: false,
};

const Galeria = () => {
  return (
    <Fragment>
      <div className="galeria" id="galeria">
        <h1>GALERIA DE IMAGENES</h1>
        <div className="cont-galeria">
          <div className="grupo-galeria" id="inauguración">
            <div className="tit-categoria">
              <p>INAUGURACIÓN</p>
            </div>
            <div className="cont-card-galeria">
              <Slide {...properties}>
                <div className="cont-cards">
                  <div className="card-galeria">
                    <div className="img">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/jetsutepsa-d8f61.appspot.com/o/galeria%2FINAUGURACION%2FIMG_7748.JPG?alt=media&token=1b6eb78d-5d66-4bd5-9373-b639ac97c4ce"
                        alt=""
                      />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                  <div className="card-galeria">
                    <div className="img">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/jetsutepsa-d8f61.appspot.com/o/galeria%2FINAUGURACION%2FIMG_7758.JPG?alt=media&token=5d9c8ac6-6037-467d-8507-dd25e003e4a7"
                        alt=""
                      />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                  <div className="card-galeria">
                    <div className="img">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/jetsutepsa-d8f61.appspot.com/o/galeria%2FINAUGURACION%2FIMG_7763.JPG?alt=media&token=e3717008-6b1a-48fb-b7f9-8ae9d99c4fcb"
                        alt=""
                      />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                </div>
                <div className="cont-cards">
                  <div className="card-galeria">
                    <div className="img">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/jetsutepsa-d8f61.appspot.com/o/galeria%2FINAUGURACION%2FIMG_7778.JPG?alt=media&token=0f7a14ad-98b4-4050-ad18-691e68db449c"
                        alt=""
                      />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                  <div className="card-galeria">
                    <div className="img">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/jetsutepsa-d8f61.appspot.com/o/galeria%2FINAUGURACION%2FIMG_7780.JPG?alt=media&token=c4e4d244-bf96-424f-9075-955b25d11bfe"
                        alt=""
                      />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                  <div className="card-galeria">
                    <div className="img">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/jetsutepsa-d8f61.appspot.com/o/galeria%2FINAUGURACION%2FIMG_7810.JPG?alt=media&token=946d36a8-c236-4bb5-b0d2-5d2139c18d0d"
                        alt=""
                      />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                </div>
              </Slide>
            </div>
          </div>
          <div className="grupo-galeria" id="foros">
            <div className="tit-categoria">
              <p>FOROS</p>
            </div>
            <div className="cont-card-galeria">
              <Slide {...properties}>
                <div className="cont-cards">
                  <div className="card-galeria">
                    <div className="img">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/jetsutepsa-d8f61.appspot.com/o/galeria%2FFORO%2FDSC_0002.JPG?alt=media&token=65027637-2dff-4a9e-9ec1-3bdb468e4aaf"
                        alt=""
                      />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                  <div className="card-galeria">
                    <div className="img">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/jetsutepsa-d8f61.appspot.com/o/galeria%2FFORO%2FDSC_0014.JPG?alt=media&token=450806df-a8bf-4527-84f9-3b9aa3f0b9e0"
                        alt=""
                      />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                  <div className="card-galeria">
                    <div className="img">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/jetsutepsa-d8f61.appspot.com/o/galeria%2FFORO%2FIMG_8348.JPG?alt=media&token=005cff41-5f61-4e95-b646-2fcede954ec2"
                        alt=""
                      />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                </div>
                <div className="cont-cards">
                  <div className="card-galeria">
                    <div className="img">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/jetsutepsa-d8f61.appspot.com/o/galeria%2FFORO%2FIMG_8382.JPG?alt=media&token=e4a5c8cb-d483-4544-bb4b-f4a66d97d636"
                        alt=""
                      />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                  <div className="card-galeria">
                    <div className="img">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/jetsutepsa-d8f61.appspot.com/o/galeria%2FFORO%2FIMG_8384.JPG?alt=media&token=84ac41c2-8e2d-4982-8e54-7fabbbb40e43"
                        alt=""
                      />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                  <div className="card-galeria">
                    <div className="img">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/jetsutepsa-d8f61.appspot.com/o/galeria%2FFORO%2FIMG_8387.JPG?alt=media&token=11d8c591-ed7a-4d33-b122-b9e1f6da0d58"
                        alt=""
                      />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                </div>
              </Slide>
            </div>
          </div>
          <div className="grupo-galeria" id="postas">
            <div className="tit-categoria">
              <p>POSTAS</p>
            </div>
            <div className="cont-card-galeria">
              <Slide {...properties}>
                <div className="cont-cards">
                  <div className="card-galeria">
                    <div className="img">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/jetsutepsa-d8f61.appspot.com/o/galeria%2FPOSTAS%2FIMG_8396.JPG?alt=media&token=435008ab-cfbc-47ed-9d0e-964f66ee70df"
                        alt=""
                      />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                  <div className="card-galeria">
                    <div className="img">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/jetsutepsa-d8f61.appspot.com/o/galeria%2FPOSTAS%2FIMG_8438.JPG?alt=media&token=dcc2b31e-8b39-4c2e-a230-b53ba4330ce5"
                        alt=""
                      />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                  <div className="card-galeria">
                    <div className="img">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/jetsutepsa-d8f61.appspot.com/o/galeria%2FPOSTAS%2FIMG_8442.JPG?alt=media&token=4d6fc221-f17a-4d9c-bdc2-32e9d8becc4e"
                        alt=""
                      />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                </div>
                <div className="cont-cards">
                  <div className="card-galeria">
                    <div className="img">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/jetsutepsa-d8f61.appspot.com/o/galeria%2FPOSTAS%2FIMG_8488.JPG?alt=media&token=336878c4-bd81-4578-b84c-073483ba8218"
                        alt=""
                      />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                  <div className="card-galeria">
                    <div className="img">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/jetsutepsa-d8f61.appspot.com/o/galeria%2FPOSTAS%2FIMG_8528.JPG?alt=media&token=98db9d98-6a9d-4bba-91af-b77e790aec35"
                        alt=""
                      />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                  <div className="card-galeria">
                    <div className="img">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/jetsutepsa-d8f61.appspot.com/o/galeria%2FPOSTAS%2FIMG_8556.JPG?alt=media&token=f114cb38-6e80-4907-999b-3d9e83b980c5"
                        alt=""
                      />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                </div>
              </Slide>
            </div>
          </div>
          <div className="grupo-galeria" id="colegios">
            <div className="tit-categoria">
              <p>VISITAS DE LOS COLEGIOS</p>
            </div>
            <div className="cont-card-galeria">
              <Slide {...properties}>
                <div className="cont-cards">
                  <div className="card-galeria">
                    <div className="img">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/jetsutepsa-d8f61.appspot.com/o/galeria%2FCOLEGIOS%2FDSC_0008.JPG?alt=media&token=fc1b287d-10e5-4316-b27f-1cd16cdaacad"
                        alt=""
                      />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                  <div className="card-galeria">
                    <div className="img">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/jetsutepsa-d8f61.appspot.com/o/galeria%2FCOLEGIOS%2FDSC_0013.JPG?alt=media&token=756ef384-283a-482f-9bb9-7962088571ac"
                        alt=""
                      />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                  <div className="card-galeria">
                    <div className="img">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/jetsutepsa-d8f61.appspot.com/o/galeria%2FCOLEGIOS%2FDSC_0017.JPG?alt=media&token=9ad16bb8-e059-40c6-b84f-68001781a80b"
                        alt=""
                      />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                </div>
                <div className="cont-cards">
                  <div className="card-galeria">
                    <div className="img">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/jetsutepsa-d8f61.appspot.com/o/galeria%2FCOLEGIOS%2FIMG_9207.JPG?alt=media&token=e5270233-3609-40a5-b7ee-5b6211246e78"
                        alt=""
                      />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                  <div className="card-galeria">
                    <div className="img">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/jetsutepsa-d8f61.appspot.com/o/galeria%2FCOLEGIOS%2FIMG_9222.JPG?alt=media&token=65b9f8f0-1f67-4482-b1c8-f0532bd35db5"
                        alt=""
                      />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                  <div className="card-galeria">
                    <div className="img">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/jetsutepsa-d8f61.appspot.com/o/galeria%2FCOLEGIOS%2FIMG_9252.JPG?alt=media&token=d9879015-e89d-4365-bfec-91c4a217b744"
                        alt=""
                      />
                    </div>
                    <span>
                      <h3>Este es el titulo</h3>
                      <p>Aqui va la descripción de la imagen</p>
                    </span>
                  </div>
                </div>
              </Slide>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Galeria;
