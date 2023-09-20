import { createContext } from 'react'
import { THEME_TYPES } from 'constants/theme'
import { ThemeContextType } from './types'

export const ThemeContext = createContext<ThemeContextType>({
  theme: THEME_TYPES.light,
  toggle: () => null,
})
