import { FC, useContext } from 'react'
import { ReactComponent as ThemeToggleIcon } from 'assets/images/theme.svg'
import styles from './styles.module.css'
import { ThemeContext } from 'contexts/theme/context'

type Props = {}

export const ThemeHandler: FC<Props> = () => {

  const { toggle } = useContext(ThemeContext)

  return (
    <button className={styles.themeHandler} onClick={() => toggle()}>
      <ThemeToggleIcon />
    </button>
  )
}
