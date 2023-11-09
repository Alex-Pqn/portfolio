import styles from './Home.module.scss'
import DefaultHero from '@/components/Default/DefaultHero/DefaultHero'
import Photo from '@/assets/photo.jpg'
import DefaultLink from '@/components/Default/DefaultLink/DefaultLink'

function Home() {
  const isMobileDisplay = document.documentElement.clientWidth <= 768

  return (
    <div className={styles.container} id="container">
      {/* DefaultHero */}
      {!isMobileDisplay && <DefaultHero title={"Je m'appelle Alexandre."} />}
      {/* Home */}
      <section className={styles.home}>
        {/* Intro */}
        <section className={styles.home__intro}>
          <div className={styles['home__intro-photo']}>
            <img src={Photo} alt="Photo" />
          </div>
          <div className={styles['home__intro-text']}>
            {isMobileDisplay ? (
              <h1>
                Je m&apos;appelle Alexandre, j&apos;ai 19 ans, et je suis à la
                recherche de mon premier emploi.
              </h1>
            ) : (
              <h2>
                J&apos;ai 19 ans, et après trois années de formation, je suis à
                la recherche de mon premier emploi.
              </h2>
            )}
            <p>
              Mes deux formations dans le développement web m&apos;ont permis
              d&apos;explorer des technologies telles que React et Vue.js, le
              framework Express pour la création d&apos;API REST, mais aussi
              MySQL et MongoDB.
            </p>
            <p>
              Motivé et passionné par ce domaine, mon objectif est désormais
              d&apos;intégrer une équipe dynamique.
            </p>
          </div>
        </section>
        <section className={styles.home__discover}>
          <DefaultLink text="Découvrir mon portfolio" to={'/portfolio'} />
        </section>
      </section>
    </div>
  )
}

export default Home
