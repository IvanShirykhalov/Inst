export interface UsersResponse {
  items: User[]
  totalCount: number
}

export interface User {
  name: string
  id: number
  photos: {
    small: null | string
    large: null | string
  }
  status: null
  followed: boolean
}
