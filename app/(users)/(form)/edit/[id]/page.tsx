'use client'

import { useRouter } from 'next/navigation'
import { SubmitHandler } from 'react-hook-form'

import {
  useGetUserQuery,
  useEditUserMutation,
} from '@/app/redux/services/users'
import {
  Header,
  Title,
  Loader,
} from '@/app/components'
import { UserInput } from '@/app/types'
import UserForm from '../../Form'

type Props = {
  params: { id: string }
}

const EditUser = ({ params }: Props) => {
  const { data: user, isLoading } = useGetUserQuery(params.id)
  const [editUser] = useEditUserMutation()
  const router = useRouter()

  const onSubmit: SubmitHandler<UserInput> = (data) => {
    editUser({ id: user?.id as string, ...data })
    router.push('/')
  }

  if (isLoading) {
    return (
      <Loader />
    )
  }

  return (
    <>
      <Header>
        <Title>Edit user</Title>
      </Header>
      <UserForm onSubmit={onSubmit} defaultValues={user} />
    </>
  )
}

export default EditUser
