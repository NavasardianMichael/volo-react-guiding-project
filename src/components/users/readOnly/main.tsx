import { FC } from 'react'
import { User as UserType } from 'store/users/types'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'

type Props = {
  data: UserType
}

export const ReadOnlyUser: FC<Props> = ({ data }) => {
  return (
    <Link className={styles.readOnly} to={data.id}>
      {data.name}
    </Link>      
  )
}