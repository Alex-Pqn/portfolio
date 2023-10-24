import styles from './DocumentPdf.module.scss'
import PropTypes, { InferProps } from 'prop-types'
import { Document, Page, pdfjs } from 'react-pdf'
import { useState } from 'react'

import 'react-pdf/dist/Page/AnnotationLayer.css'
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url
).toString()

const Props = {
  file: PropTypes.any,
}

type PropsTypes = InferProps<typeof Props>

const DocumentPdf = ({ file }: PropsTypes): React.JSX.Element => {
  const [, setNumPages] = useState<number>()
  const [pageNumber] = useState<number>(1)

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages)
  }

  return (
    <div className={styles.container}>
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

DocumentPdf.propTypes = Props

export default DocumentPdf
