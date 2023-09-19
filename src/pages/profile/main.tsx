import { FC } from 'react'
import styles from './styles.module.css'
import { EditableUser } from 'components/users/editable/main'

type Props = {}

const ProfilePage: FC<Props> = () => {
  return (
    <div className={styles.profilePage}>
      <EditableUser />
    </div>
  )
}

export default ProfilePage