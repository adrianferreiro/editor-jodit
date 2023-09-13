import { useRef } from 'react';
import jsPDF from 'jspdf';
import ReportTemplate from './ReportTemplate';

function PDFprueba() {
	const reportTemplateRef = useRef(null);

	const handleGeneratePdf = () => {
		const doc = new jsPDF({
			format: 'legal',
			unit: 'oficio',
		});

		// Adding the fonts.
		doc.setFont('Inter-Regular', 'normal');

		doc.html(reportTemplateRef.current, {
			async callback(doc) {
				await doc.save('document');
			},
		});
	};

	return (
		<div>
			<button className="button" onClick={handleGeneratePdf}>
				Generate PDF
			</button>
			<div ref={reportTemplateRef}>
				<ReportTemplate contenido={<h1>Exito</h1>} />
			</div>
		</div>
	);
}

export default PDFprueba;