import { FC } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from './styles.module.css'
import { combineClassNames } from 'utils/commons'

type Props = {
  
}

export const Navbar: FC<Props> = ({  }) => {
  return (
    <div className={styles.navbar}>
      <NavLink 
        to='/' 
        className={({ isActive }) => combineClassNames('link', isActive ? styles.active : undefined)}
      >
        Home
      </NavLink>
      <NavLink 
        to='users' 
        className={({ isActive }) => combineClassNames('link', isActive ? styles.active : undefined)}
      >
        Users
      </NavLink>
    </div>
  )
}