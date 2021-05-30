import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import '../css/navbar.css'

const Navbar = () => {
	return (
		<div className="navbar">
			<a href="#" className="activo nav-item">
				INICIO
			</a>
			<a href="#info" className="nav-item">
				¿QUÉ ES JETS?
			</a>
			<a href="#galeria" className="nav-item">
				GALERÍA
			</a>
			<a href="#expo" className="nav-item">
				EXPOSITORES
			</a>
			<a href="#contacto" className="nav-item">
				CONTÁCTANOS
			</a>
			<Link to={'login-juego'} className="entrar-juego">
				EVENTO ONLINE
			</Link>
		</div>
	)
}

export default Navbar