import { User } from 'store/users/types'
import { processGetUsers, processSetUserOptions } from "./processors"
import { GetUserResponse, GetUsersResponse, SetUserOptionsResponse } from "./types"
import { appFetch } from 'utils/api'

export const getUsers = async () => {
    const response = await appFetch<GetUsersResponse>({
        url: `https://jsonplaceholder.typicode.com/users`
    })
    const processed = processGetUsers(response)
    
    return processed
}

export const getUser = async ({ id }: Pick<User, 'id'>) => {
    const response = await appFetch<GetUserResponse>({
        url: `https://jsonplaceholder.typicode.com/users/${id}`
    })
    console.log({id});
    
    const processed = processGetUsers([response])
    
    return processed
}

export const putUserOptions = async (options: Pick<User, 'id'> & Partial<User>) => {
    const response = await appFetch<SetUserOptionsResponse>({
        url: `https://jsonplaceholder.typicode.com/users/${options.id}`,
        params: {
            method: 'PUT',
            body: JSON.stringify(options),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }
    })
    const processed = processSetUserOptions(response)

    return processed
}