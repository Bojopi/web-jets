import React, { Fragment } from 'react'

import '../css/empresas.css'

const Empresas = () => {
    return (
        <Fragment>
            <div className="contenedor">
                <h1>Página principal de los JETS</h1>
                <div className="slider">
                    <div className="slider-track">
                        <div className="listas">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" alt="" />
                        </div>
                        <div className="listas">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" alt="" />
                        </div>
                        <div className="listas">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" alt="" />
                        </div>
                        <div className="listas">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" alt="" />
                        </div>
                        <div className="listas">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Empresas