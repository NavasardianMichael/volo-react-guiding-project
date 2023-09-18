import { FC, useEffect } from 'react'
import styles from './styles.module.css'
import { useAppSelector } from 'hooks/useAppSelector'
import { selectUsers } from 'store/users/selectors'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { getUsersAsync } from 'store/users/thunks'
import { ReadOnlyUser } from '../readOnly/main'

type Props = {
  
}

export const UsersList: FC<Props> = ({  }) => {

  const dispatch = useAppDispatch()
  const users = useAppSelector(selectUsers)

  useEffect(() => {
    dispatch(getUsersAsync())
  }, [])

  return (
    <div className={styles.usersList}>
      {
        users.allIds.map(userId => {
          const data = users.byId[userId]

          return (
            <ReadOnlyUser
              key={userId}
              data={data}
            />
          )
        })
      }
    </div>
  )
}