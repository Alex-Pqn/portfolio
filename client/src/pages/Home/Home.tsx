import styles from './Home.module.scss'
import DefaultHero from '@/components/Default/DefaultHero/DefaultHero'
import photoPng from '@/assets/photo.png'
import photoWebp from '@/assets/photo.webp'
import DefaultLink from '@/components/Default/DefaultLink/DefaultLink'
import { motion as m } from 'framer-motion'

const animation = {
  visible: {
    transition: {
      when: 'beforeChildren',
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
  hidden: {
    transition: {
      when: 'afterChildren',
    },
  },
}
const animationItem = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
}

function Home() {
  const isMobileDisplay = document.documentElement.clientWidth <= 768

  return (
    <div className={styles.container} id="container">
      {/* DefaultHero */}
      {!isMobileDisplay && <DefaultHero title={"Je m'appelle Alexandre."} />}

      {/* Home */}
      <m.section
        className={styles.home}
        initial="hidden"
        animate="visible"
        variants={animation}
      >
        {/* Intro */}
        <section className={styles.home__intro}>
          <m.div
            className={styles['home__intro-photo']}
            variants={animationItem}
          >
            <picture>
              <source srcSet={photoWebp} type="image/webp" />
              <img src={photoPng} alt="Photo" />
            </picture>
          </m.div>
          <div className={styles['home__intro-text']}>
            {isMobileDisplay ? (
              <m.h1 variants={animationItem}>
                Je m&apos;appelle Alexandre, j&apos;ai 20 ans et je suis développeur React et Vue.js.
              </m.h1>
            ) : (
              <m.h2 variants={animationItem}>
                J&apos;ai 20 ans et je suis un développeur React et Vue.js basé à Grenoble.
              </m.h2>
            )}
            <m.div variants={animationItem}>
              <p>
                Mes deux formations dans le développement web m&apos;ont permis
                d&apos;explorer des technologies telles que React et Vue.js, le
                framework Express pour la création d&apos;API REST, mais aussi
                MySQL et MongoDB.
              </p>
              <p>
                Mon objectif est de rejoindre une équipe dynamique où je peux apporter ma contribution en créant des interfaces utilisateur intuitives et réactives.
              </p>
            </m.div>
          </div>
        </section>
        <m.section className={styles.home__discover} variants={animationItem}>
          <DefaultLink text="Découvrir mon portfolio" to={'/portfolio'} />
        </m.section>
      </m.section>
    </div>
  )
}

export default Home
