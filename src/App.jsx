import { useEffect, useRef, useState } from "react";
import JoditEditor from "jodit-react";
import ReportTemplate from './ReportTemplate';
import jsPDF from 'jspdf';



//https://pspdfkit.com/blog/2022/how-to-convert-html-to-pdf-using-react/

const JoditEditorComponent = () => {
  const editor = useRef(null);

  const reportTemplateRef = useRef(null);

	const handleGeneratePdf = () => {
		const doc = new jsPDF({
			format: 'legal',
			unit: 'px',
      //  maxWidth: 2480,
		});

		// Adding the fonts.
		// doc.setFont('Inter-Regular', 'normal');

		doc.html(reportTemplateRef.current, {
			async callback(doc) {
				await doc.save('document');
			},
		});
	};

  useEffect(() => {
    if(localStorage.getItem("document") != null){
      setContent(localStorage.getItem("document"));
    }
      }, [])
  

  const [content, setContent] = useState("");

  const guardarTexto = (newContent) => {
    localStorage.setItem("document", newContent);
  };

  return (
    <>
      <div className="editor_texto">
        <JoditEditor
          ref={editor}
          value={content}
          config={{
            // width: "100%",
            toolbarSticky: true,
            spellcheck: true, // Habilita la corrección ortográfica.
            language: "es",
            tabKey: "Tab",
          }}
          onChange={(newContent) => {
            // Maneja los cambios en el contenido del editor aquí
            // console.log(newContent);
            guardarTexto(newContent);
          }}
        />
      </div>
      <div>
			<button className="button" onClick={handleGeneratePdf}>
				Generate PDF
			</button>
			<div ref={reportTemplateRef}>
				<ReportTemplate contenido={content} />
			</div>
		</div>
    </>
  );
};

export default JoditEditorComponent;
