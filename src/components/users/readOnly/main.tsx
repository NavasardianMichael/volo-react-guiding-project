import { FC } from 'react'
import { User as UserType } from 'store/users/types'
import { Link } from 'react-router-dom'
import { combineClassNames } from 'utils/styles'
import styles from './styles.module.css'

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