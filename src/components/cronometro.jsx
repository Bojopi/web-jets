import React, { useEffect, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import "../css/cronometro.css";

const Cronometro = () => {

  let history = useHistory()

  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("June 29, 2021 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        //stop our timer
        clearInterval(interval.current);

        //redirigir al inicio de sesión del juego
        history.push('/jets/login-juego')

      } else {
        //actualizar timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 0);
  };

  //componentDidMount
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });
  return (
    <section className="timer-container" id="temporizador">
      <section className="timer">
        <div className="informacion">
          <h2>Se viene el evento más esperado</h2>
          <span>JETS</span>
          <p className="inscribete">
            Inscríbete para ser parte de esta experiencia 2.0
          </p>
          <p className="titulo-falta">SÓLO FALTAN: </p>
        </div>
        <div className="temporizador">
          <section>
            <p className="contador">{timerDays}</p>
            <p className="texto">DÍAS</p>
          </section>
          <span>:</span>
          <section>
            <p className="contador">{timerHours}</p>
            <p className="texto">HORAS</p>
          </section>
          <span>:</span>
          <section>
            <p className="contador">{timerMinutes}</p>
            <p className="texto">MINUTOS</p>
          </section>
          <span>:</span>
          <section>
            <p className="contador">{timerSeconds}</p>
            <p className="texto">SEGUNDOS</p>
          </section>
        </div>
        <Link to="/jets" className="inicio">
          {/* <BsArrowLeftShort /> */}
          Volver al inicio
        </Link>
      </section>
    </section>
  );
};

export default Cronometro;
