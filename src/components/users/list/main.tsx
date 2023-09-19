import { FC, useEffect } from 'react'
import { useAppSelector } from 'hooks/useAppSelector'
import { selectUsers } from 'store/users/selectors'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { getUsersAsync } from 'store/users/thunks'
import { ReadOnlyUser } from '../readOnly/main'
import { Loader } from 'components/shared/loader/main'
import styles from './styles.module.css'

type Props = {}

export const UsersList: FC<Props> = () => {

  const dispatch = useAppDispatch()
  const { allIds, byId, isPending } = useAppSelector(selectUsers)

  useEffect(() => {
    dispatch(getUsersAsync())
  }, [dispatch])

  if(isPending) return <Loader />

  return (
    <div className={styles.usersList}>
      {
        allIds.map(userId => {
          const data = byId[userId]

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