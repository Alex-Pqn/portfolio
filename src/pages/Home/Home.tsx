import styles from './Home.module.scss'
import React from 'react'
import DefaultHero from '@/components/Default/DefaultHero/DefaultHero'

const Home = (): React.JSX.Element => {
  return (
    <div className={styles.container}>
      {/* DefaultHero */}
      <DefaultHero title={"Je m'appelle Alexandre."} />
      {/* Content */}
      <section className={styles.content}>
        <div className={styles.content__left}>
          <img src="" alt="" />
        </div>
        <div className={styles.content__right}>
          <h2>Je suis Développeur Web</h2>
          <p>
            Passionné par l’informatique depuis de nombreuses années, je débute
            le développement web dans ma chambre, en autodidacte. Je décide
            finalement de quitter les études secondaires début 2020 pour me
            consacrer pleinement à cet univers.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Home
