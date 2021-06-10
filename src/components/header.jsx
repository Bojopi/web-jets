import React, { Fragment } from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'

import '../css/header.css';

const Header = () => {

    const scrollToTop = () => {
        scroll.scrollToTop()
    }

    return (
        <Fragment>
            <div className="header">
                <div className="titulo">
                    <div className="logo">
                        <div className="icono">
                            <img src="https://i.postimg.cc/8P5t8X4B/LOGO-JETS-2.png" alt="" onClick={scrollToTop}/>
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