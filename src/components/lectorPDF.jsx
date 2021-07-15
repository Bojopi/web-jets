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
} from "@react-pdf/renderer";

import "../css/lector.css";

const styles = StyleSheet.create({
  texto: {
    textAlign: "center",
    position: "absolute",
    top: 400
  },
  imagen: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%'
  },
});

const Doc = ({data}) => (
  <Document>
    <Page size="LETTER">
      <View>
        <Image
          src="https://i.postimg.cc/PqB4H7RQ/CERTIFICADO-ESTUDIANTES.png"
          style={styles.imagen}
        ></Image>
      </View>
      <View>
        <Text style={styles.texto}>
          {data}
        </Text>
      </View>
    </Page>
  </Document>
);

const Descargar = () => {
  //Extraer la info del usuario
  const pdfContext = useContext(PdfContext);
  const { usuario, usuarioAutenticado } = pdfContext;

  useEffect(() => {
    usuarioAutenticado();
  }, []);

  let nombre = ''

  if(usuario) {
    nombre = `${usuario.name} ${usuario.lastname}`
    // console.log(nombre)
  }

  return (
    <div className="fondo">
      <PDFDownloadLink document={<Doc data={nombre}/>} fileName="Certificado JETS 2021.pdf">
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
