import React, { useState } from "react";
import { Document, Page } from 'react-pdf'

import "../css/lector.css";

import convocatoria1 from '../assets/CONVOCATORIA DESAFIO EXTREMO 2021.pdf'

const Lector = () => {

    const [numPages, setNumPages] = useState(null)

    const onDocumentLoadSuccess = ({numPages}) => {
        setNumPages(numPages)
    } 

  return (
    <div>
        <Document
        file="https://drive.google.com/file/d/1VOKb_H8s7Qwo74rQbJxzDEp2X9IApErj/view?usp=sharing"
        >
            <Page pageNumber={onDocumentLoadSuccess} />
        </Document>
    </div>


    // <div style={{ position: "absolute", width: "100%", height: "100%" }}>
    //   <object
    //     data={require("../assets/CONVOCATORIA DESAFIO EXTREMO 2021 (1).pdf")}
    //     type="application/pdf"
    //     width="100%"
    //     height="100%"
    //   ></object>
      
    // </div>
  );
};

export default Lector;
