import styles from './DefaultHeader.module.scss'

import { NavLink } from 'react-router-dom'

const DefaultHeader = (): React.JSX.Element => {
  return (
    <header className={styles.container}>
      <nav className={styles.nav}>
        <ul className={styles.nav__links}>
          <li>
            <NavLink to={'/'}>À Propos</NavLink>
          </li>
          <li>
            <NavLink to={'/portfolio'}>Portfolio</NavLink>
          </li>
          <li>
            <NavLink to={'/cv'}>CV</NavLink>
          </li>
          {/* <li>
            <NavLink to={'/contact'}>Contact</NavLink>
          </li> */}
        </ul>
      </nav>
    </header>
  )
}

export default DefaultHeader
