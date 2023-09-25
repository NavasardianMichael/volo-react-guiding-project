import { User } from 'store/users/types'
import { appFetch } from 'utils/api'
import { processGetUsers, processSetUserOptions, processUser } from './processors'
import { GetUserResponse, GetUsersResponse, SetUserOptionsResponse } from './types'

export const getUsers = async () => {
  const response = await appFetch<GetUsersResponse>({
    url: `${process.env.REACT_APP_URL_BASE}/users`,
  })
  const processed = processGetUsers(response)

  return processed
}

export const getUser = async ({ id }: Pick<User, 'id'>) => {
  const response = await appFetch<GetUserResponse>({
    url: `${process.env.REACT_APP_URL_BASE}users/${id}`,
  })

  const processed = processUser(response)

  return processed
}

export const putUserOptions = async (options: Pick<User, 'id'> & Partial<User>) => {
  const response = await appFetch<SetUserOptionsResponse>({
    url: `${process.env.REACT_APP_URL_BASE}/users/${options.id}`,
    params: {
      method: 'PUT',
      body: JSON.stringify(options),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  })
  const processed = processSetUserOptions(response)

  return processed
}
