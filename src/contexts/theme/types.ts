import { Dispatch, SetStateAction } from 'react'

export const THEME_TYPES = {
  light: 'light',
  dark: 'dark',
} as const

export type ThemeContextType = {
  theme: (typeof THEME_TYPES)[keyof typeof THEME_TYPES]
  setTheme: Dispatch<SetStateAction<ThemeContextType['theme']>>
}
