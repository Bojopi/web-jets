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
    top: 500,
    width: 100,
  },
  imagen: {
    width: 100,
  },
});

const Descargar = () => {
  //Extraer la info del usuario
  const pdfContext = useContext(PdfContext);
  const { usuario, usuarioAutenticado } = pdfContext;

  useEffect(() => {
    usuarioAutenticado();
  }, []);

  const Doc = () => (
    <Document>
      <Page size="LETTER">
        <View>
          <Image
            src="https://i.postimg.cc/PqB4H7RQ/CERTIFICADO-ESTUDIANTES.png"
            style
          ></Image>
          <Text style={styles.texto}>
            {usuario.name} {usuario.lastname}
          </Text>
        </View>
      </Page>
    </Document>
  );

  return (
    <div className="fondo">
      <PDFDownloadLink document={<Doc />} fileName="certificado.pdf">
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download Now!"
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
