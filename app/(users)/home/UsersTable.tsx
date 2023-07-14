'use client'

import { User } from '@/app/types'
import {
  Button,
  Table, TBody, THead, Tr, Th, Td,
} from '@/app/components'

type Props = {
  users: User[]
  onUserDelete: (user: User) => void
}

const UsersTable = ({ users, onUserDelete }: Props) => (
  <Table>
    <THead>
      <Tr>
        <Th>Id</Th>
        <Th>Name</Th>
        <Th>Username ↓</Th>
        <Th>Email</Th>
        <Th>City</Th>
        <Th>Edit</Th>
        <Th>Delete</Th>
      </Tr>
    </THead>
    <TBody>
      {(users as User[]).map(user => (
        <Tr key={user.id}>
          <Td>{user.id}</Td>
          <Td>{user.name}</Td>
          <Td>{user.username}</Td>
          <Td>{user.email}</Td>
          <Td>{user.city}</Td>
          <Td>
            <Button href={`/edit/${user.id}`} secondary>Edit</Button>
          </Td>
          <Td>
            <Button
              danger
              onClick={() => onUserDelete(user)}
            >
              Delete
            </Button>
          </Td>
        </Tr>
      ))}
    </TBody>
  </Table>
)

export default UsersTable
