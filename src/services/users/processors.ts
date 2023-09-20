import { User, UsersActionPayloads } from 'store/users/types'
import { GetUsersResponse, SetUserOptionsResponse, UserResponse } from './types'

export const processGetUsers = (
  response: GetUsersResponse
): UsersActionPayloads['setUsers'] => {
  const initial: UsersActionPayloads['setUsers'] = {
    byId: {},
    allIds: [],
    visitedUserId: '',
  }

  const processed = response.reduce((acc, user) => {
    const processedUser = processUser(user)
    acc.byId[user.id] = processedUser
    acc.allIds.push(processedUser.id)
    return acc
  }, initial)

  return processed
}

export const processSetUserOptions = (
  response: SetUserOptionsResponse
): UsersActionPayloads['setUserOptions'] => {
  return processUserPartially(response)
}

const processUserPartially = (
  response: SetUserOptionsResponse
): UsersActionPayloads['setUserOptions'] => {
  const processed: UsersActionPayloads['setUserOptions'] = {
    id: response.id.toString(),
  }

  if (response.name) processed.name = response.name
  if (response.email) processed.email = response.email

  return processed
}

export const processUser = (response: UserResponse): User => {
  const processed = {
    id: response.id.toString(),
    name: response.name,
    email: response.email,
  }

  return processed
}
