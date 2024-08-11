import { useState } from 'react'
import styles from './DefaultHeader.module.scss'
import { motion as m } from 'framer-motion'

import { Link, NavLink } from 'react-router-dom'

function DefaultHeader() {
  const [lastScrollPosition, setLastScrollPosition] = useState(0)
  const [headerScrollTriggerPosition] = useState(25)

  useState(() => {
    addEventListener('scroll', () => setLastScrollPosition(window.scrollY))

    return () => {
      removeEventListener('scroll', () => setLastScrollPosition(window.scrollY))
    }
  })
  return (
    <m.header
      className={`${styles.header} ${
        lastScrollPosition >= headerScrollTriggerPosition
          ? styles['header--scroll']
          : ''
      }`}
    >
      <nav className={styles['header-nav']}>
        <ul className={styles['header-nav__items']}>
          <li className={styles['header-nav__item']}>
            <NavLink to={'/'}>À Propos</NavLink>
          </li>
          <li className={styles['header-nav__item']}>
            <NavLink to={'/portfolio'}>Portfolio</NavLink>
          </li>
          <li className={styles['header-nav__item']}>
            <Link to={'/CV_AlexandrePaquien.pdf'} target="_blank">
              CV
            </Link>
          </li>
          <li className={styles['header-nav__item']}>
            <NavLink to={'/contact'}>Contact</NavLink>
          </li>
        </ul>
      </nav>
    </m.header>
  )
}

export default DefaultHeader
