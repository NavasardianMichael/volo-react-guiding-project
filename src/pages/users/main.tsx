import { FC } from 'react'
import { UsersList } from 'components/users/list/main'
import styles from './styles.module.css'

type Props = {}

const UsersPage: FC<Props> = () => {
  return (
    <div className={styles.usersPage}>
      <UsersList />
    </div>
  )
}

export default UsersPage
