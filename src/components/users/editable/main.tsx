import { useUserIdFromPath } from 'hooks/useUserIdFromPath'
import { ChangeEventHandler, FC, FormEventHandler, useEffect, useState } from 'react'
import { User as UserType } from 'store/users/types'
import styles from './styles.module.css'
import { useAppSelector } from 'hooks/useAppSelector'
import { selectUserById } from 'store/users/selectors'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { getUserAsync, getUsersAsync, setUserOptionsAsync } from 'store/users/thunks'
import { useNavigate } from 'react-router-dom'

type Props = {

}

export const EditableUser: FC<Props> = ({ }) => {

  const dispatch = useAppDispatch()
  const navigate = useNavigate();
  const userIdFromPath = useUserIdFromPath()
  const user = useAppSelector(selectUserById(userIdFromPath))
  
  const [values, setValues] = useState<Omit<UserType, 'id'>>({
    name: user?.name,
    email: user?.email
  })

  useEffect(() => {
    if(!user) return;

    setValues({
      name: user.name,
      email: user.email
    })
  }, [user])

  useEffect(() => {
    dispatch(getUserAsync({id: userIdFromPath}))
  }, [userIdFromPath])

  const handleChange = (fieldName: keyof Omit<UserType, 'id'>): ChangeEventHandler<HTMLInputElement> => {
    return (e) => {
      setValues(prev => ({
        ...prev,
        [fieldName]: e.target.value
      }))
    }
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()

    dispatch(setUserOptionsAsync({
      ...values,
      id: user.id
    }))
  }

  return (
    <div className={styles.editableUser}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formControl}>
          <label htmlFor="user-name">Name</label>
          <input
            id='user-name'
            value={values.name}
            onChange={handleChange('name')}
          />
        </div>
        <div className={styles.formControl}>
          <label htmlFor="user-email">Email</label>
          <input
            id='user-email'
            value={values.email}
            onChange={handleChange('email')}
          />
        </div>
        <button type='submit'>
          Save
        </button>
      </form>
    </div>
  )
}