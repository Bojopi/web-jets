import React, {Fragment} from 'react'

import '../css/login_juego.css'

//logo
import logo from '../images/ICONO-JETS-ROJO.png'

const LoginJuego = () => {
	const onChange = () => {}

	return (
		<Fragment>
			<div id="login-juego" className="login-juego">
				<div className="contenedor-login">
					<div className="top">
						<img src={logo} alt="" className="logo" />
						<h1>INICIAR SESION</h1>
					</div>
					<div className="formulario">
						<form>
							<input
								className="campo-input"
								type="text"
								name="usuario"
								id="user"
								placeholder="Ingresa tu nombre de usuario"
								onChange={onChange}
							/>
							<input
								className="campo-input"
								type="password"
								name="password"
								id="pass"
								placeholder="Ingresa tu contraseña"
								onChange={onChange}
							/>
							<input
								type="submit"
								value="ACCEDER"
								className="btn-enviar"
							/>
						</form>
					</div>
				</div>
			</div>
		</Fragment>
	)
}

export default LoginJuego
