import { FC, useContext } from 'react'
import { THEME_TYPES } from 'constants/theme'
import { ThemeContext } from 'contexts/theme/context'
import { Router } from 'routes/RouterProvider'
import { combineClassNames } from 'utils/styles'
import './app.css'

export const App: FC = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={combineClassNames('app', THEME_TYPES[theme])}>
      <Router />
    </div>
  )
}

export default App
