'use client'

import { useRouter } from 'next/navigation'
import { SubmitHandler } from 'react-hook-form'

import {
  useAddUserMutation,
} from '@/app/redux/services/users'
import {
  Header,
  Title,
} from '@/app/components'
import { UserInput } from '@/app/types'
import UserForm from '../Form'

const AddUser = () => {
  const [addUser] = useAddUserMutation()
  const router = useRouter()

  const onSubmit: SubmitHandler<UserInput> = (data) => {
    addUser(data)
    router.push('/')
  }

  return (
    <>
      <Header>
        <Title>Add User</Title>
      </Header>
      <UserForm onSubmit={onSubmit} />
    </>
  )
}

export default AddUser
