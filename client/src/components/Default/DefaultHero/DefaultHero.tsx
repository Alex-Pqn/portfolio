import styles from './DefaultHero.module.scss'
import { motion as m } from 'framer-motion'

interface Props {
  title: string
  description?: string
}

function DefaultHero({ title, description }: Props) {
  const animationItem = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.75,
      },
    },
  }

  const animation = {
    visible: {
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.075,
      },
    },
    hidden: {
      transition: {
        when: 'afterChildren',
      },
    },
  }

  return (
    <m.section
      className={styles.hero}
      initial="hidden"
      animate="visible"
      variants={animation}
    >
      <m.h1 className={styles.hero__title} variants={animationItem}>
        {title}
      </m.h1>
      {description && (
        <m.span className={styles.hero__description} variants={animationItem}>
          {description}
        </m.span>
      )}
    </m.section>
  )
}

export default DefaultHero
