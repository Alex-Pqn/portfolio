import { useState } from 'react'
import styles from './DefaultHeader.module.scss'

import { NavLink } from 'react-router-dom'

const DefaultHeader = (): React.JSX.Element => {
  const [lastScrollPosition, setLastScrollPosition] = useState(0)
  const [headerScrollTriggerPosition] = useState(25)

  addEventListener('scroll', () => setLastScrollPosition(window.scrollY))

  return (
    <header
      className={`${styles['header']} ${
        lastScrollPosition >= headerScrollTriggerPosition
          ? styles['header--scroll']
          : ''
      }`}
    >
      <nav className={styles.header__nav}>
        <ul>
          <li>
            <NavLink to={'/'}>À Propos</NavLink>
          </li>
          <li>
            <NavLink to={'/portfolio'}>Portfolio</NavLink>
          </li>
          <li>
            <NavLink to={'/cv'}>CV</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default DefaultHeader
