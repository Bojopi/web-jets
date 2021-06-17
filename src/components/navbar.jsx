import React from "react";
import {
  // BrowserRouter as Router,
  // Switch,
  // Route,
  Link,
} from "react-router-dom";
import { Link as Enlace, animateScroll as scroll } from "react-scroll";

import "../css/navbar.css";

import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="navbar" id="navbar">
      <ul className="menu">
        <li className="link">
          <Enlace
            className="enla"
            to="inicio"
            spy={true}
            smooth={true}
            offset={-200}
            duration={500}
          >
            INICIO
          </Enlace>
        </li>
        <li className="link">
          <Enlace
            className="enla"
            to="info"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            ¿QUÉ ES JETS?
          </Enlace>
        </li>
        <li className="link">
          <Enlace
            className="enla"
            to="speakers"
            spy={true}
            smooth={true}
            // offset={-150}
            duration={500}
          >
            EXPOSITORES
          </Enlace>
        </li>
        <li className="link">
          <Enlace
            className="enla"
            to="convocatoria"
            spy={true}
            smooth={true}
            offset={-200}
            duration={500}
          >
            CONVOCATORIAS
          </Enlace>
        </li>
        <li className="link">
          <Enlace
            className="enla"
            to="galeria"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            GALERÍA
          </Enlace>
        </li>
        <li className="link">
          <Enlace
            className="enla"
            to="contacto"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            CONTÁCTANOS
          </Enlace>
        </li>
        <li className="link">
          <Link to={"/jets/temporizador"} className="entrar-juego enla">
            EVENTO ONLINE
          </Link>
        </li>
        {/* <li className="toggle">
          <Enlace
            className="enla"
            spy={true}
            smooth={true}
            duration={500}
          >
            <AiOutlineMenu />
          </Enlace>
        </li> */}
      </ul>
    </div>
  );
};

export default Navbar;

// import {
//   Nav,
//   NavLink,
//   Bars,
//   NavMenu,
//   NavBtn,
//   NavBtnLink
// } from './navbarElements';

// const Navbar = () => {
//   return (
//     <>
//       <Nav>
//         <Bars />
//         <NavMenu>
//           <NavLink to='/jets' activeStyle>
//             INICIO
//           </NavLink>
//           <NavLink to='#info' activeStyle>
//             ¿QUÉ ES JETS?
//           </NavLink>
//           <NavLink to='/jets/speakers' activeStyle>
//             EXPOSITORES
//           </NavLink>
//           <NavLink to='/jets/convocatoria' activeStyle>
//             CONVOCATORIAS
//           </NavLink>
//           <NavLink to='/jets/galeria' activeStyle>
//             GALERÍA
//           </NavLink>
//           <NavLink to='/jets/contacto' activeStyle>
//             CONTÁCTANOS
//           </NavLink>
//           <NavLink to='/jets/temporizador' activeStyle>
//             EVENTO ONLINE
//           </NavLink>
//           {/* Second Nav */}
//           {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
//         </NavMenu>
//       </Nav>
//     </>
//   );
// };

// export default Navbar;
