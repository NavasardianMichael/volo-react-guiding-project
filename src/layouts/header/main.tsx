import { FC } from 'react'
import { Navbar } from './navbar/main'
import { Logo } from './logo/main'
import styles from './styles.module.css'
import { Outlet } from 'react-router-dom'

type Props = {
  
}

export const Header: FC<Props> = ({  }) => {
  return (
    <div className={styles.header}>
      <Navbar />
      <Logo />
      <Outlet />
    </div>
  )
}