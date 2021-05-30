import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import '../css/login_juego.css'

//iconos
// import { FaUser } from 'react-icons/fa'
// import { RiLockPasswordFill } from 'react-icons/ri'
import { BsArrowLeftShort } from 'react-icons/bs'

//logo
import logo from '../images/ICONO-JETS-ROJO.png'

const LoginJuego = () => {
	//State para iniciar sesión
	const [usuario, guardarUsuario] = useState({
		user: '',
		password: '',
	})

	//extraer usuario
	const {user, password} = usuario

	const onChange = (e) => {
		guardarUsuario({
			...usuario,
			[e.target.name]: e.target.value,
		})
	}

	//cuando el usuario inicie sesión
	const onSubmit = (e) => {
		e.preventDefault()
		//validación de campos vacíos

		//pasar al action
	}

	return (
		<div id="login-juego" className="login-juego">
			<div className="contenedor-login">
				<div className="top">
					<img src={logo} alt="" className="logo" />
					<h1>INICIAR SESION</h1>
				</div>
				<div className="formulario">
					<form onSubmit={onSubmit}>
						<input
							className="campo-input"
							type="text"
							name="user"
							id="user"
							value={user}
							placeholder=" Ingresa tu nombre de usuario"
							onChange={onChange}
						/>
						<input
							className="campo-input"
							type="password"
							name="password"
							id="password"
							value={password}
							placeholder="Ingresa tu contraseña"
							onChange={onChange}
						/>
						<input type="submit" value="ACCEDER" className="btn-enviar" />
					</form>
					<Link to="/" className="inicio">
						<BsArrowLeftShort/>
						Página de inicio
					</Link>
				</div>
			</div>
		</div>
	)
}

export default LoginJuego
