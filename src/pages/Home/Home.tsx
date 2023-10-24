import styles from './Home.module.scss'
import { Link } from 'react-router-dom'
import DefaultHero from '@/components/Default/DefaultHero/DefaultHero'
import Photo from '@/assets/photo.jpg'
import IconArrowRight from '@/components/Icon/IconArrowRight/IconArrowRight'

const Home = (): React.JSX.Element => {
  return (
    <div className={styles.container}>
      {/* DefaultHero */}
      <DefaultHero title={"Je m'appelle Alexandre."} />
      {/* Content */}
      <div className={styles.content}>
        {/* Intro */}
        <section className={styles.intro}>
          <div className={styles.intro__photo}>
            <img src={Photo} width="350px" height="450px" alt="Photo" />
          </div>
          <div className={styles.intro__text}>
            <h2>
              Je suis un Développeur Web, à la recherche de son premier emploi
              dans le secteur.
            </h2>
            <p>
              Après trois années de formation en développement web, mon objectif
              est désormais d'intégrer une équipe dynamique, où, avec motivation
              et détermination je pourrai mettre en pratique mes compétences
              acquises au cours de ces dernières années.
            </p>
          </div>
        </section>
        <section className={styles.discover}>
          <Link to={'/portfolio'}>
            Découvrir mon portfolio <IconArrowRight size="27px" />
          </Link>
        </section>
      </div>
    </div>
  )
}

export default Home
