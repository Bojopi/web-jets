import React, { Fragment } from 'react'

import '../css/footer.css'

const Footer = () => {
    return (
        <Fragment>
            <div className="footer">
                <div className="redes-sociales">
                    <a href="https://www.facebook.com/UTEPSA">
                        <img className="img-redes" src="https://i.postimg.cc/fRWZhNFq/facebook.png" alt="" />
                    </a>
                    <a href="https://www.instagram.com/universidadutepsa/">
                        <img className="img-redes" src="https://i.postimg.cc/BvX0XCJx/instagram.png" alt="" />
                    </a>
                    <a href="https://www.linkedin.com/school/universidad-tecnol%C3%B3gica-privada-de-santa-cruz/">
                        <img className="img-redes" src="https://i.postimg.cc/VNpcMbN2/linkedin.png" alt="" />
                    </a>
                    <a href="https://twitter.com/utepsabolivia">
                        <img className="img-redes" src="https://i.postimg.cc/50zWmNYy/twitter.png" alt="" />
                    </a>
                    <a href="https://www.youtube.com/channel/UCEIE7ed62UNSaO1TE1tziqQ">
                        <img className="img-redes" src="https://i.postimg.cc/RZPmSYxS/youtube.png" alt="" />
                    </a>
                </div>
                <div className="copyright">
                    <p>Copyright &copy; CDTE Utepsa</p>
                </div>
            </div>
        </Fragment>
    )
}


export default Footer