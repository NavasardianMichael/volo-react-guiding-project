import { FC } from 'react'
import { User as UserType } from 'store/users/types'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import { combineClassNames } from 'utils/commons'

type Props = {
  data: UserType
}

export const ReadOnlyUser: FC<Props> = ({ data }) => {
  return (
    <Link className={combineClassNames(styles.readOnlyUser, 'link')} to={data.id}>
      {data.name}
    </Link>
  )
}