import { createContext } from 'react';
import { THEME_TYPES, ThemeContextType } from './types';

export const ThemeContext = createContext<ThemeContextType>({
    theme: THEME_TYPES.light,
    setTheme: () => null
});