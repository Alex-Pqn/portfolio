import styles from './DocumentPdf.module.scss'
import PropTypes, { InferProps } from 'prop-types'
import { Document, Page, pdfjs } from 'react-pdf'
import { useState } from 'react'

import 'react-pdf/dist/Page/AnnotationLayer.css'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const Props = {
  file: PropTypes.any,
}

type PropsTypes = InferProps<typeof Props>

const DocumentPdf = ({ file }: PropsTypes): React.JSX.Element => {
  const [, setNumPages] = useState(null)
  const [pageNumber] = useState(1)

  const onDocumentLoadSuccess = (numPages): void => setNumPages(numPages)

  return (
    <div className={styles.container}>
      <Document
        loading="Chargement du PDF..."
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page renderTextLayer={false} pageNumber={pageNumber} />
      </Document>
    </div>
  )
}

DocumentPdf.propTypes = Props

export default DocumentPdf
