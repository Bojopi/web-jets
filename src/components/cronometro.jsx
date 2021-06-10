import React, { useState } from "react";

import "../css/cronometro.css";

const Cronometro = () => {
  return(
      <section className="timer-container">
          <section className="timer">
              <div className="informacion">
                  <h2>Ya se viene el evento más esperado de los JETS</h2>
                  <p>Inscríbete para ser parte de esta experiencia 2.0</p>
              </div>
              <div className="temporizador">
                  <section>
                      <p className="contador">87</p>
                      <p className="texto">DAYS</p>
                  </section>
                  <span>:</span>
                  <section>
                      <p className="contador">87</p>
                      <p className="texto">HOURS</p>
                  </section>
                  <span>:</span>
                  <section>
                      <p className="contador">87</p>
                      <p className="texto">MINUTES</p>
                  </section>
                  <span>:</span>
                  <section>
                      <p className="contador">87</p>
                      <p className="texto">SECONDS</p>
                  </section>
              </div>
          </section>
      </section>
  )
};

export default Cronometro;
