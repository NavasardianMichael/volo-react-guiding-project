import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { ROUTES } from 'routes/routes'
import { combineWithNavLinkActiveClassName } from 'utils/styles'
import styles from './styles.module.css'

type Props = {}

export const Navbar: FC<Props> = () => {
  return (
    <div className={styles.navbar}>
      <NavLink
        to={ROUTES.home}
        className={combineWithNavLinkActiveClassName(styles.active, 'link')}
      >
        Home
      </NavLink>
      <NavLink
        to={ROUTES.users}
        className={combineWithNavLinkActiveClassName(styles.active, 'link')}
      >
        Users
      </NavLink>
    </div>
  )
}
