import styles from './Cv.module.scss'
import { Helmet } from 'react-helmet-async'
import DefaultHero from '@/components/Default/DefaultHero/DefaultHero'
import DocumentPdf from '@/components/Document/DocumentPdf/DocumentPdf'
import IconDownload from '@/components/Icon/IconDownload/IconDownload'

const Cv = (): React.JSX.Element => {
  const cvFilePath = './CV_Alexandre_Paquien.pdf'

  return (
    <>
      {/* Head */}
      <Helmet>
        <title>CV • Alexandre Paquien</title>
      </Helmet>
      {/* Container */}
      <div className={styles.container}>
        {/* DefaultHero */}
        <DefaultHero title={'CV.'} description={'Découvrez mon CV'} />
        {/* Content */}
        <section className={styles.content}>
          <div className={styles['content__download-cv']}>
            <a
              href={cvFilePath}
              target="_blank"
              download="CV_Alexandre_Paquien.pdf"
            >
              <button>
                Télécharger <IconDownload size="18px" />
              </button>
            </a>
          </div>
          <div className={styles.content__cv}>
            <DocumentPdf file={cvFilePath} />
          </div>
        </section>
      </div>
    </>
  )
}

export default Cv
