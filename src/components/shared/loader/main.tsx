import { FC } from 'react'
import styles from './styles.module.css'
import {ReactComponent as Spinner} from 'assets/images/spinner.svg'

type Props = {}

export const Loader: FC<Props> = () => {
  return (
    <div className={styles.loader}>
      <Spinner />
    </div>
  )
}