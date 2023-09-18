import { FC } from 'react'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'

type Props = {
  
}

export const Navbar: FC<Props> = ({  }) => {
  return (
    <div className={styles.Navbar}>
        <Link to='users'>
          Users
        </Link>
    </div>
  )
}