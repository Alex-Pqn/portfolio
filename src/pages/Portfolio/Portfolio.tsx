import styles from './Portfolio.module.scss'
import React from 'react'
import DefaultHero from '@/components/Default/DefaultHero/DefaultHero'

const Home = (): React.JSX.Element => {
  return (
    <div className={styles.container}>
      {/* DefaultHero */}
      <DefaultHero
        title={'Portfolio.'}
        description={'Parcourez mon portfolio'}
      />
      {/* Content */}
      <section className={styles.content}>...</section>
    </div>
  )
}

export default Home
