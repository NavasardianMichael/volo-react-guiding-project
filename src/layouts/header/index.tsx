import { FC } from 'react'
import { Navbar } from './navbar'
import { ThemeHandler } from './themeHandler'
import styles from './styles.module.css'

type Props = {}

export const Header: FC<Props> = () => {
  return (
    <div className={styles.header}>
      <Navbar />
      <ThemeHandler />
    </div>
  )
}
