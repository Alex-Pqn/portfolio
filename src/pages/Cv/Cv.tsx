import styles from './Cv.module.scss'
import { Helmet } from 'react-helmet-async'
import DefaultHero from '@/components/Default/DefaultHero/DefaultHero'
import DocumentPdf from '@/components/Document/DocumentPdf/DocumentPdf'
import IconDownload from '@/components/Icon/IconDownload/IconDownload'
import { Link } from 'react-router-dom'
import IconArrowUpRight from '@/components/Icon/IconArrowUpRight/IconArrowUpRight'

const Cv = (): React.JSX.Element => {
  const cvFilePath = './CV.pdf'
  const cvFileNameOnDownload = 'CV_Alexandre_Paquien.pdf'
  const isDesktopDisplay = document.documentElement.clientWidth >= 1200

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
          {/* Buttons */}
          <div className={styles.content__buttons}>
            {isDesktopDisplay && (
              // Hide view-cv button on mobile devices
              // Most of them automatically download the PDF file when the link is opened, so there's no difference with the download-cv button.
              <div className={styles['content__buttons__view-cv']}>
                <Link to={'/CV.pdf'} target="_blank">
                  <button>
                    Consulter <IconArrowUpRight size="15px" />
                  </button>
                </Link>
              </div>
            )}
            <div className={styles['content__buttons__download-cv']}>
              <Link
                to={cvFilePath as unknown as string}
                target="_blank"
                download={cvFileNameOnDownload}
              >
                <button>
                  Télécharger <IconDownload size="17px" />
                </button>
              </Link>
            </div>
          </div>
          {/* CV */}
          <div className={styles.content__cv}>
            <DocumentPdf file={cvFilePath as unknown as File} />
          </div>
        </section>
      </div>
    </>
  )
}

export default Cv
