import React, {useState, useContext, useEffect} from 'react'
import {Link, useHistory} from 'react-router-dom'
import AuthContext from '../context/autenticacion/authContext'

import '../css/login_juego.css'

//iconos
import { BsArrowLeftShort } from 'react-icons/bs'


const LoginJuego = () => {
	let history = useHistory()

	const authContext = useContext(AuthContext)
	const { autenticado, iniciarSesion } = authContext

	//en caso de que el password o usuario no exista
	useEffect(() => {
		if (autenticado) {
			// history.push('/jets')
			history.push('/jets/juego')
		}
	}, [autenticado, history])

	//State para iniciar sesión
	const [usuario, guardarUsuario] = useState({
		username: '',
		password: '',
	})

	//extraer usuario
	const {username, password} = usuario

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
		const usu = document.getElementById("username")
		const pass = document.getElementById("password")

		if (username.trim() === "") {
			usu.style.border = "3px solid #cf0a2c"
			usu.style.borderRadius = "20px"
			usu.placeholder = "Nombre de usuario obligatorio"
		} else {
			usu.style.border = "none"
			usu.style.borderBottom = "3px solid rgb(76, 152, 196)"
			usu.style.borderRadius = "0px"
			if (password.trim() === "") {
				pass.style.border = "3px solid #cf0a2c"
				pass.style.borderRadius = "20px"
				pass.placeholder = "Nombre de usuario obligatorio"
			} else {
				pass.style.border = "none"
				pass.style.borderBottom = "3px solid rgb(76, 152, 196)"
				pass.style.borderRadius = "0px"
				// alert(`El usuario ${user} y la contraseña ${password} están logueados`)
			}
		}
		//pasar al action
		iniciarSesion({ username, password })
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
							name="username"
							id="username"
							value={username}
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
