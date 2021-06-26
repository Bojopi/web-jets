import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import '../css/login_juego.css'

//iconos
import { BsArrowLeftShort } from 'react-icons/bs'


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
		const usu = document.getElementById("user")
		const pass = document.getElementById("password")

		if (user.trim() === "") {
			usu.style.border = "3px solid #cf0a2c"
			usu.style.borderRadius = "20px"
			usu.placeholder = "Nombre de usuario obligatorio"
		} else {
			if (password.trim() === "") {
				pass.style.border = "3px solid #cf0a2c"
				pass.style.borderRadius = "20px"
				pass.placeholder = "Nombre de usuario obligatorio"
			} else {
				alert(`El usuario ${user} y la contraseña ${password} están logueados`)
			}
		}
		//pasar al action
	}

	return (
		<div id="login-juego" className="login-juego">
			<div className="contenedor-login">
				<div className="top">
					<img src="https://i.postimg.cc/RZ0rDT6j/ICONO-JETS-ROJO.png" alt="" className="logo" />
					<h1>INICIAR SESIÓN</h1>
				</div>
				<div className="formulario">
					<form onSubmit={onSubmit} noValidate>
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
					<Link to="/jets" className="inicio">
						<BsArrowLeftShort/>
						Página de inicio
					</Link>
				</div>
			</div>
		</div>
	)
}

export default LoginJuego
