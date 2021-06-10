import React, { Fragment } from 'react'

import '../css/footer.css'

const Footer = () => {
    return (
        <Fragment>
            <div className="footer">
                <div className="redes-sociales">
                    <img className="img-redes" src="https://i.postimg.cc/fRWZhNFq/facebook.png" alt="" />
                    <img className="img-redes" src="https://i.postimg.cc/BvX0XCJx/instagram.png" alt="" />
                    <img className="img-redes" src="https://i.postimg.cc/VNpcMbN2/linkedin.png" alt="" />
                    <img className="img-redes" src="https://i.postimg.cc/50zWmNYy/twitter.png" alt="" />
                    <img className="img-redes" src="https://i.postimg.cc/RZPmSYxS/youtube.png" alt="" />
                </div>
                <div className="copyright">
                    <p>Copyright &copy; CDTE Utepsa</p>
                </div>
            </div>
        </Fragment>
    )
}


export default Footer