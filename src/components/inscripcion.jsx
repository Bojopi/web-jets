import React from 'react'

// import '../css/inscripcion.css'

const Inscripcion = () => {
    return(
        <div className="menu-inscripcion" id="inscripcion">
            <div className="contenedor-img">
                <h1>INICIA SESIÓN PARA INSCRIBIRTE</h1>
            </div>
            <div className="contenedor-sesion">
                <form action="" className="form">
                    <div className="grupo-form tit-form">
                        <h1>INICIA SESIÓN</h1>
                    </div>
                    <div className="grupo-form dato">
                        <label for="usuario">Nombre de usuario:</label>
                        <input type="text" name="usuario" id="user" required />
                    </div>
                    <div className="grupo-form dato">
                        <label for="password">Contraseña:</label>
                        <input type="password" name="password" id="pass" required />
                    </div>
                    <div className="grupo-form">
                        <input type="submit" value="ACCEDER" />
                    </div>
                </form>
            </div>
        </div>
    )
}


export default Inscripcion