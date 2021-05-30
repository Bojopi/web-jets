import React, { Fragment } from 'react'

import '../css/header.css';

//imagenes
import timon_blanco from '../images/timon_fondo_blanco.jpeg'
import timon_rojo from '../images/timon_fondo_rojo.jpeg'

const Header = () => {
    return (
        <Fragment>
            <div className="header">
                <div className="titulo">
                    <div className="logo">
                        <div className="icono">
                            <img src={timon_rojo} alt="" />
                        </div>
                    </div>
                    <div className="cont-tit">
                        <div className="tit-jets">
                            <h1>JETS</h1>
                        </div>
                        <div className="tit-texto">
                            <h3>Jornadas Empresariales, Tecnológicas y Sociales</h3>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Header;