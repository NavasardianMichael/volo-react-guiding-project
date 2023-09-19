import { GetNavLinkActiveClassName } from 'types/styles'

export const combineClassNames = (...classNames: ReadonlyArray<string | undefined>) => {
    return classNames.filter(className => !!className).join(' ')
}

export const combineWithNavLinkActiveClassName: GetNavLinkActiveClassName = (active, ...rest)  => {
    return ({ isActive }) => {
        return combineClassNames(isActive ? active : '', ...rest)
    }
}