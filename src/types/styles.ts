import { NavLinkProps } from 'react-router-dom'

export type GetNavLinkActiveClassName = (
  ...list: string[]
) => NavLinkProps['className']
