import React, { Fragment } from 'react'

import '../css/galeria.css'

const Galeria = () => {
    return (
        <Fragment>
            <div className="galeria">
                <h1>Esta es la galeria</h1>
                <div className="cont-galeria">
                    <div className="grupo-galeria" id="ganadores">
                        <div className="card-galeria">
                            <div className="img">
                                <img src="" alt="" />
                                <span>
                                    <h3>Este es el titulo</h3>
                                    <p>Aqui va la descripción de la imagen</p>
                                </span>
                            </div>
                        </div>
                        <div className="card-galeria">
                            <div className="img">
                                <img src="" alt="" />
                                <span>
                                    <h3>Este es el titulo</h3>
                                    <p>Aqui va la descripción de la imagen</p>
                                </span>
                            </div>
                        </div>
                        <div className="card-galeria">
                            <div className="img">
                                <img src="" alt="" />
                                <span>
                                    <h3>Este es el titulo</h3>
                                    <p>Aqui va la descripción de la imagen</p>
                                </span>
                            </div>
                        </div>
                        <div className="card-galeria">
                            <div className="img">
                                <img src="" alt="" />
                                <span>
                                    <h3>Este es el titulo</h3>
                                    <p>Aqui va la descripción de la imagen</p>
                                </span>
                            </div>
                        </div>
                        <div className="card-galeria">
                            <div className="img">
                                <img src="" alt="" />
                                <span>
                                    <h3>Este es el titulo</h3>
                                    <p>Aqui va la descripción de la imagen</p>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="grupo-galeria" id="proyectos"></div>
                    <div className="grupo-galeria" id="concursos"></div>
                    <div className="grupo-galeria" id="conferencias"></div>
                </div>
            </div>
        </Fragment>
    )
}

export default Galeria