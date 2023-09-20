import { NormalizedShape } from 'types/commons'

export type UsersSlice = NormalizedShape<User> & {
  visitedUserId: User['id']
  isPending: boolean
}

export type User = {
  id: string
  name: string
  email: string
}

export type UsersActionPayloads = {
  setUsers: Omit<UsersSlice, 'isPending'>
  setVisitedUserId: User['id']
  setUserOptions: Pick<User, 'id'> & Partial<User>
}
