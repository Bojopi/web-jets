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
                    <img src={facebook} alt="" />
                    <img src={instagram} alt="" />
                    <img src={linkedin} alt="" />
                    <img src={twitter} alt="" />
                    <img src={youtube} alt="" />
                </div>
                <div className="copyright">
                    <p>Copyright &copy; CDTE Utepsa</p>
                </div>
            </div>
        </Fragment>
    )
}


export default Footer