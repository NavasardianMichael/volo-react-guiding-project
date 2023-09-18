import { FC, PropsWithChildren, useMemo, useState } from 'react'
import { THEME_TYPES, ThemeContextType } from './types'
import { ThemeContext } from './context'

export const ThemeContextProvider: FC<PropsWithChildren> = ({ children }) => {
    const [theme, setTheme] = useState<ThemeContextType['theme']>(THEME_TYPES.light)

    const context = useMemo<ThemeContextType>(() => ({
        theme,
        setTheme
    }), [theme])

    return (
        <ThemeContext.Provider value={context}>
            {children}
        </ThemeContext.Provider>
    )
}