import { CombineWithNavLinkActiveClassName } from 'types/styles'

export const combineClassNames = (...classNames: ReadonlyArray<string | undefined>) => {
  return classNames.filter((className) => !!className).join(' ')
}

export const combineWithNavLinkActiveClassName: CombineWithNavLinkActiveClassName = (active, ...rest) => {
  return ({ isActive }) => {
    return combineClassNames(isActive ? active : '', ...rest)
  }
}

export const a = (b: any) => null
