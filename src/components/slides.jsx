import React, { Fragment } from 'react'

import '../css/slides.css';

const Slides = () => {
    return (
        <Fragment>
            <div className="slide">
                <div className="imagen">
                    <h1>COSA 1</h1>
                </div>
                <div className="imagen">
                    <h1>COSA 2</h1>
                </div>
                <div className="imagen">
                    <h1>COSA 3</h1>
                </div>
            </div>
        </Fragment>
    );
}

export default Slides;