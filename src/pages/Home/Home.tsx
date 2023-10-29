import styles from './Home.module.scss'
import DefaultHero from '@/components/Default/DefaultHero/DefaultHero'
import Photo from '@/assets/photo.jpg'
import DefaultLink from '@/components/Default/DefaultLink/DefaultLink'

const Home = (): React.JSX.Element => {
  return (
    <div className={styles.container} id="container">
      {/* DefaultHero */}
      <DefaultHero title={'Qui suis-je ?'} />

      {/* Home */}
      <div className={styles.home}>
        {/* Intro */}
        <section className={styles.home__intro}>
          <div className={styles.home__intro__photo}>
            <img src={Photo} width="350px" height="450px" alt="Photo" />
          </div>
          <div className={styles.home__intro__text}>
            <h2>Je m'appelle Alexandre, je suis Développeur Web..</h2>
            <p>
              Et après trois années de formation dans le développement web, mon
              objectif est désormais d'intégrer une équipe dynamique, où, avec
              motivation et détermination, je pourrai mettre en pratique mes
              compétences acquises au cours de ces dernières années.
            </p>
          </div>
        </section>
        <section className={styles.home__discover}>
          <DefaultLink text="Découvrir mon portfolio" to={'/portfolio'} />
        </section>
      </div>
    </div>
  )
}

export default Home
