import { NormalizedShape } from 'types/commons'

export type UsersSlice = NormalizedShape<User>

export type User = {
    id: string
    name: string
    email: string
}

export type UsersActionPayloads = {
    setUsers: UsersSlice
    setUserOptions: Pick<User, 'id'> & Partial<User>
}