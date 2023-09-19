import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { combineWithNavLinkActiveClassName } from 'utils/styles'
import styles from './styles.module.css'
import { ROUTES } from 'routes/routes'

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