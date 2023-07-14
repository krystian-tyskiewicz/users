'use client'

import { styled } from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

import { User } from '@/app/types'
import { RootState } from '@/app/redux/store'
import { setCurrentUser } from '@/app/redux/slices/users'
import {
  useGetUsersQuery,
  useDeleteUserMutation,
} from '@/app/redux/services/users'
import {
  Header,
  Button,
  Title,
  Loader,
} from '@/app/components'
import UsersTable from './UsersTable'
import DeleteModal from './DeleteModal'

const Wrapper = styled.div`
  overflow: auto;
`

const UsersListPage = () => {
  const { data: users, isLoading } = useGetUsersQuery()
  const [deleteUser] = useDeleteUserMutation()
  const currentUser = useSelector((state: RootState) => state.users.currentUser)
  const dispatch = useDispatch()

  const handleOpenModal = (user: User) => {
    dispatch(setCurrentUser(user))
  }

  const handleCloseModal = () => {
    dispatch(setCurrentUser(null))
  }

  const handleDeleteUser = () => {
    deleteUser(currentUser?.id as string)
    handleCloseModal()
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <>
      <Header>
        <Title>Users List</Title>
        <Button href="/add">Add new</Button>
      </Header>
      <Wrapper>
        <UsersTable
          users={users as User[]}
          onUserDelete={handleOpenModal}
        />
        <DeleteModal
          userName={currentUser?.name}
          isOpen={!!currentUser}
          onClose={handleCloseModal}
          onDelete={handleDeleteUser}
        />
      </Wrapper>
    </>
  )
}

export default UsersListPage
