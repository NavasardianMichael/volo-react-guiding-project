import { NavLinkProps } from 'react-router-dom'

export type CombineWithNavLinkActiveClassName = (...list: string[]) => NavLinkProps['className']
