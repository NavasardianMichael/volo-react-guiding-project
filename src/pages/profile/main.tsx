import { FC } from 'react'
import { EditableUser } from 'components/users/editable/main'
import styles from './styles.module.css'

type Props = {}

const ProfilePage: FC<Props> = () => {
  return (
    <div className={styles.profilePage}>
      <EditableUser />
    </div>
  )
}

export default ProfilePage
