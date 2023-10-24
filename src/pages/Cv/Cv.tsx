import styles from './Cv.module.scss'
import { Helmet } from 'react-helmet-async'
import DefaultHero from '@/components/Default/DefaultHero/DefaultHero'
import DocumentPdf from '@/components/Document/DocumentPdf/DocumentPdf'
import CV from '@/assets/CV - Alexandre Paquien.pdf'
import IconDownload from '@/components/Icon/IconDownload/IconDownload'

const Cv = (): React.JSX.Element => {
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
            <a href={CV} download>
              <button>
                Télécharger <IconDownload />
              </button>
            </a>
          </div>
          <div className={styles.content__cv}>
            <DocumentPdf file={CV} />
          </div>
        </section>
      </div>
    </>
  )
}

export default Cv
