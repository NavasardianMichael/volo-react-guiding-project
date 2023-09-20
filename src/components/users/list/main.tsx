import { FC, useEffect } from 'react'
import { selectUsers } from 'store/users/selectors'
import { getUsersAsync } from 'store/users/thunks'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { useAppSelector } from 'hooks/useAppSelector'
import { Loader } from 'components/shared/loader/main'
import { ReadOnlyUser } from '../readOnly/main'
import styles from './styles.module.css'

type Props = {}

export const UsersList: FC<Props> = () => {
  const dispatch = useAppDispatch()
  const { allIds, byId, isPending } = useAppSelector(selectUsers)

  useEffect(() => {
    dispatch(getUsersAsync())
  }, [dispatch])

  if (isPending) return <Loader />

  return (
    <div className={styles.usersList}>
      {allIds.map((userId) => {
        const data = byId[userId]

        return <ReadOnlyUser key={userId} data={data} />
      })}
    </div>
  )
}
