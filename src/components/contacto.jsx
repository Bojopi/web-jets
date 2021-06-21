import React, { Fragment, useState } from "react";
import emailjs from "emailjs-com";

import { ImLocation } from "react-icons/im";
import { ImPhone } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";

import "../css/contacto.css";

const Contacto = () => {
  //State para enviar mensaje
  const [correo, guardarCorreo] = useState({
    name: "",
    email: "",
    message: "",
  });

  //extraer mensaje
  const { name, email, message } = correo;

  const onChange = (e) => {
    guardarCorreo({
      ...correo,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    //campos vacíos
    const nombre = document.getElementById("nombre");
    const correo = document.getElementById("email");
    const mensaje = document.getElementById("mensaje");
    if (name.trim() === "") {
      nombre.style.borderBottomColor = "red";
      nombre.placeholder = "Debe escribir un nombre";
      // return;
    } else {
      nombre.style.borderBottomColor = "#555759";
      if (email.trim() === "") {
        correo.style.borderBottomColor = "red";
        correo.placeholder = "Debe escribir un correo";
        // return;
      } else {
        correo.style.borderBottomColor = "#555759";
        if (message.trim() === "") {
          mensaje.style.borderBottomColor = "red";
          mensaje.placeholder = "Debe escribir un mensaje";
          // alert("Debe rellenar todos los campos");
          // return;
        } else {
          mensaje.style.borderBottomColor = "#555759";

          emailjs
            .sendForm(
              "service_efdlz8h",
              "template_71ab3rs",
              e.target,
              "user_frZYFUT1O6bOlc5RBRWUk"
            )
            .then(
              (result) => {
                console.log(result.text);
                alert("Mensaje enviado");
                guardarCorreo({
                  name: "",
                  email: "",
                  message: "",
                });
              },
              (error) => {
                console.log(error.text);
              }
            );
        }
      }
    }
  };

  return (
    <Fragment>
      <div className="contenedor-contacto" id="contacto">
        <div className="info-contacto">
          <h1>CONT&Aacute;CTANOS</h1>
          <img src="https://i.postimg.cc/Xv7vxF4J/MAPA-UTEPSA.png" alt="" />
          <div className="info-texto">
            <ImLocation />
            <p className="inf-jets">
              Dirección: 3er Anillo Interno N° 715, entre Busch y Av. San Martín
            </p>
            <ImPhone />
            <p className="inf-jets">Teléfono: (591 - 3) 363-9213</p>
            <MdEmail />
            <p className="inf-jets">Email: jets@utepsa.edu</p>
            <CgWebsite />
            <p className="inf-jets">Website: www.utepsa.edu</p>
          </div>
        </div>
        <div className="form-contacto">
          <div className="cont-formulario">
            <p className="text-info">
              Ante cualquier duda o consulta puedes enviarnos tus comentarios
              mediante el siguiente formulario, todos los campos son necesarios.
            </p>
            <form className="form-info" onSubmit={sendEmail} noValidate>
              <input
                type="text"
                id="nombre"
                name="name"
                value={name}
                placeholder="Nombre Completo:"
                onChange={onChange}
              />
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                placeholder="Correo Electrónico:"
                onChange={onChange}
              />
              <input
                type="text"
                id="mensaje"
                name="message"
                value={message}
                placeholder="Mensaje:"
                onChange={onChange}
              />
              <button type="submit">ENVIAR</button>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Contacto;
