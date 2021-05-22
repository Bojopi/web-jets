import React, { Fragment } from 'react'

import '../css/footer.css'

//imagenes
import facebook from '../images/facebook.png'
import instagram from '../images/instagram.png'
import linkedin from '../images/linkedin.png'
import twitter from '../images/twitter.png'
import youtube from '../images/youtube.png'

const Footer = () => {
    return (
        <Fragment>
            <div className="footer">
                <div className="redes-sociales">
                    <img className="img-redes" src={facebook} alt="" />
                    <img className="img-redes" src={instagram} alt="" />
                    <img className="img-redes" src={linkedin} alt="" />
                    <img className="img-redes" src={twitter} alt="" />
                    <img className="img-redes" src={youtube} alt="" />
                </div>
                <div className="copyright">
                    <p>Copyright &copy; CDTE Utepsa</p>
                </div>
            </div>
        </Fragment>
    )
}


export default Footer