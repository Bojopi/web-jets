import React, { Fragment } from 'react'
import { Slide } from 'react-slideshow-image'

import '../css/slides.css';
import 'react-slideshow-image/dist/styles.css'

const properties = {
    duration: 3000,
    transitionDuration: 500,
    infinite: true,
    // indicators: true,
    arrows: true,
    autoplay: true
}

const Slides = () => {
    return (
        <div className="slide">
            <Slide {...properties}>
                <div className="each-slide">
                    <div>
                        <h1>COSA 1</h1>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <h1>COSA 2</h1>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <h1>COSA 3</h1>
                    </div>
                </div>
            </Slide>
        </div>

        // <Fragment>
        //     <div className="slide">
        //         <div className="imagen">
        //             <h1>COSA 1</h1>
        //         </div>
        //         <div className="imagen">
        //             <h1>COSA 2</h1>
        //         </div>
        //         <div className="imagen">
        //             <h1>COSA 3</h1>
        //         </div>
        //     </div>
        // </Fragment>
    );
}

export default Slides;