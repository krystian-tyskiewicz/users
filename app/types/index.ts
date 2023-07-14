export type User = {
  id: string
  email: string
  name: string
  username: string
  city?: string
}

export type UserInput = Omit<User, 'id'>
