import styles from './CvPdf.module.scss'
import { Document, Page, pdfjs } from 'react-pdf'
import { useState } from 'react'
import 'react-pdf/dist/Page/AnnotationLayer.css'
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url
).toString()

interface Props {
  file?: File
}

const CvPdf = ({ file }: Props): React.JSX.Element => {
  const [, setNumPages] = useState<number>()
  const [pageNumber] = useState<number>(1)

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages)
  }

  return (
    <div className={styles.pdf}>
      <Document
        loading="Chargement du PDF..."
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        error="Impossible de récupérer le PDF. Veuillez réessayer dans un instant."
      >
        <Page renderTextLayer={false} pageNumber={pageNumber} />
      </Document>
    </div>
  )
}

export default CvPdf
