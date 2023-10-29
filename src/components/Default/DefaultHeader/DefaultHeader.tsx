import styles from './DefaultHeader.module.scss'

import { NavLink } from 'react-router-dom'

const DefaultHeader = (): React.JSX.Element => {
  return (
    <header className={styles.header}>
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
