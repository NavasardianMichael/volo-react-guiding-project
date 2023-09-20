export type GetUsersResponse = UserResponse[]

export type GetUserResponse = UserResponse

export type SetUserOptionsResponse = Pick<UserResponse, 'id'> & Partial<UserResponse>

export type UserResponse = {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}
