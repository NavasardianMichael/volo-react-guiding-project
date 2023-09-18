import { FC } from 'react'
import { Navbar } from './navbar/main'
import styles from './styles.module.css'

type Props = {
  
}

export const Header: FC<Props> = ({  }) => {
  return (
    <div className={styles.header}>
      <Navbar />
    </div>
  )
}