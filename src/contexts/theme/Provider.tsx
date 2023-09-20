import { FC, PropsWithChildren, useMemo, useState } from 'react'
import { THEME_TYPES } from 'constants/theme'
import { ThemeContext } from './context'
import { ThemeContextType } from './types'

export const ThemeContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeContextType['theme']>(THEME_TYPES.light)

  const context = useMemo<ThemeContextType>(
    () => ({
      theme,
      toggle: () => setTheme(prev => prev === THEME_TYPES.light ? THEME_TYPES.dark : THEME_TYPES.light),
    }),
    [theme]
  )

  return <ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>
}
