import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from 'layouts/header'
import styles from './styles.module.css'

type Props = {}

export const OutletWithHeader: FC<Props> = () => {
  return (
    <div className={styles.withHeader}>
      <Header />
      <Outlet />
    </div>
  )
}
