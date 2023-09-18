import { ChangeEventHandler, FC, useState } from 'react'
import { User as UserType } from 'store/users/types'
import styles from './styles.module.css'
import { Link, useLocation, useSearchParams } from 'react-router-dom'

type Props = {

}

export const EditableUser: FC<Props> = ({ }) => {

  const { pathname } = useLocation()
  console.log({pathname});
  
  const [values, setValues] = useState<Omit<UserType, 'id'>>({
    email: '',
    name: ''
  })

  const handleChange = (fieldName: keyof Omit<UserType, 'id'>): ChangeEventHandler<HTMLInputElement> => {
    return (e) => {
      setValues(prev => ({
        ...prev,
        [fieldName]: e.target.value
      }))
    }
  }

  return (
    <div className={styles.editableUser}>
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
    </div>
  )
}