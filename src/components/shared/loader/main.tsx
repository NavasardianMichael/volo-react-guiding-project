import { FC } from 'react'
import { ReactComponent as Spinner } from 'assets/images/spinner.svg'
import styles from './styles.module.css'

type Props = {}

export const Loader: FC<Props> = () => {
  return (
    <div className={styles.loader}>
      <Spinner />
    </div>
  )
}
