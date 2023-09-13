const ReportTemplate = ({ contenido }) => {
  const styles = {
    page: {
		lineHeightFactor: "0px",
      // floatPrecision: "smart",
      marginLeft: "5rem",
        marginRight: "5rem",
      marginTop: "5rem",
      "page-break-after": "always",
      fontSize: "7px",
      renderingMode: "fill",
    },

    columnLayout: {
      display: "flex",
      //   justifyContent: "space-between",
      margin: "0 0 0 0",
      gap: "2rem",
      //   fontSize: "7px",
    },

    column: {
      display: "flex",
      flexDirection: "column",
    },

    spacer2: {
      height: "2rem",
    },

    fullWidth: {
      width: "50%",
    },

    marginb0: {
      marginBottom: 0,
    },
  };

  function reemplazarTamanosDeFuente(texto) {

    // probemos reemplazando line-height

    return texto.replace(/font-size:\s*([0-9]+)pt/g, (match, size) => {
      const newSize = parseInt(size) > 7 ? "7" : size;
      console.log(texto);
      // console.log(`font-size: ${newSize}px`);
      // console.log(match);
      return `font-size: ${newSize}px`;

    });
  }


  return (
    <>
      <div style={styles.page}>
        <div style={styles.columnLayout}>
          <div
            dangerouslySetInnerHTML={{
              __html: reemplazarTamanosDeFuente(contenido),
            //   __html: contenido,
				
		}}
          />
        </div>
      </div>
    </>
  );
};

export default ReportTemplate;
