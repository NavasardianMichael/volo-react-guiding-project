import { FC } from 'react'
import { Header } from 'layouts/header/main'
import { Outlet } from 'react-router-dom'
import styles from './styles.module.css'

type Props = {
  
}

export const WithHeader: FC<Props> = ({  }) => {
  return (
    <div className={styles.withHeader}>
      <Header />
      <Outlet />
    </div>
  )
}