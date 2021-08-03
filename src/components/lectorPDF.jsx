// import React, { useContext, useEffect } from "react";
// import PdfContext from "../context/autenticacion/authContext";

// import { layoutSinglelineText, PDFDocument, TextAlignment } from 'pdf-lib';
// import fontkit from '@pdf-lib/fontkit'
// import download from 'js-file-download'

// import "../css/lector.css";


// const Descargar = () => {
//   //Extraer la info del usuario
//   const pdfContext = useContext(PdfContext);
//   const { usuario, usuarioAutenticado } = pdfContext;

//   useEffect(() => {
//     usuarioAutenticado();
//   }, []);

//   let nombre = ''

//   if(usuario) {
//     nombre = `${usuario.name} ${usuario.lastname}`
//     // console.log(nombre)
//   }

//   const Documento = async () => {
//     const url = 'https://res.cloudinary.com/utepsajets/image/upload/v1626719989/CERTIFICADOS_DE_ESTUDIANTES_c3hdd4.ai'
//     const pdfBytes = await fetch(url).then(res => res.arrayBuffer())
  
//     const pdfDoc = await PDFDocument.load(pdfBytes)
//     const page = pdfDoc.getPages()
//     const firstPage = page[0]
//     const {width, heigth} = firstPage.getSize()

//     const fontSize = 20
    
//     firstPage.drawText(`${nombre}`, {
//       x: (width / fontSize) * 4,
//       // x: width / alineacion,
//       y: 400,
//       size: fontSize,
//     })
  
//     const pdfByte = await pdfDoc.save()

//     download(pdfByte, 'Certificado JETS 2021.pdf')
//   }

//   return (
//     <div className="fondo">
//       <button className="boton" onClick={Documento}>DESCARGAR PDF</button>
//     </div>
//   );
// };

// export default Descargar;





import React, { useContext, useEffect } from "react";
import PdfContext from "../context/autenticacion/authContext";

import { jsPDF } from "jspdf";
import {
  PDFDownloadLink,
  Page,
  Text,
  Image,
  View,
  Document,
  StyleSheet,
  Svg
} from "@react-pdf/renderer";

import "../css/lector.css";

import certificado from "../assets/Asset_2.png"

const styles = StyleSheet.create({
  texto: {
    textAlign: "center",
    position: "absolute",
    top: 390
  },
  imagen: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%'
  },
  codi: {
    position: 'absolute',
    textAlign: 'right',
    fontSize: 10,
    top: 800,
    marginRight: 10
  },
});

const Doc = ({data, cod}) => (
  <Document>
    <Page size="A4">
      <View>
        <Image
          // src={certificado}
          src="https://res.cloudinary.com/utepsajets/image/upload/v1627569614/Asset_3_m1atv9.png"
          style={styles.imagen}
        ></Image>
      </View>
      <View>
        <Text style={styles.texto}>
          {data}
        </Text>
      </View>
      <View>
        <Text style={styles.codi}>
          {cod}
        </Text>
      </View>
    </Page>
  </Document>
);

const Descargar = () => {
  //Extraer la info del usuario
  const pdfContext = useContext(PdfContext);
  const { usuario, usuarioAutenticadoPdf } = pdfContext;

  useEffect(() => {
    usuarioAutenticadoPdf();
  }, []);

  let nombre = ''
  let codigo = ''

  if(usuario) {
    nombre = `${usuario.name} ${usuario.lastname}`
    // console.log(nombre)
    
    codigo = `N° ${usuario.codigo}`
    // console.log(codigo)
  }

  return (
    <div className="fondo">
      <PDFDownloadLink document={<Doc data={nombre} cod={codigo} />} fileName="Certificado JETS 2021.pdf">
        {({ blob, url, loading, error }) =>
          loading ? "Cargando el documento..." : "¡Descárgalo aquí!"
        }
      </PDFDownloadLink>
    </div>
  );
};

export default Descargar;




// const Descargar = () => {

//   //Extraer la info del usuario
//   const pdfContext = useContext(PdfContext)
// 	const { usuario, usuarioAutenticado } = pdfContext

//   useEffect(() => {
//     usuarioAutenticado()
//   }, [])

//   const doc = new jsPDF()
//   doc.html(document.body, {
//     callback: (doc) => {
//       doc.save()
//     },
//     x: 10,
//     y: 10
//   })

//   return (
//     <div className="fondo" id="fon">
//         <img className="imagen" />
//             {usuario ? <h1 className="nomUsuario">{usuario.name} {usuario.lastname}</h1> : null}
//     </div>
//   );
// };

// export default Descargar;
