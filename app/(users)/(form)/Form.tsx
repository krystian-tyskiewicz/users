'use client'

import { styled } from 'styled-components'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'

import {
  Input,
  ButtonsGroup,
  FormButton,
  FormRow,
  FormInputError,
} from '@/app/components'
import { UserInput } from '@/app/types'

const Form = styled.form``

type Props = {
  onSubmit: SubmitHandler<UserInput>
  defaultValues?: UserInput
}

const UserForm = ({ onSubmit, defaultValues }: Props) => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: defaultValues || {
      name: '',
      username: '',
      email: '',
      city: '',
    },
  })

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow>
        <Controller
          name="name"
          control={control}
          rules={{
            required: true,
          }}
          render={({ field }) => <Input placeholder="Name*" {...field} />}
        />
      </FormRow>
      <FormRow>
        <Controller
          name="username"
          control={control}
          rules={{
            required: true,
          }}
          render={({ field }) => <Input placeholder="Username*" {...field} />}
        />
      </FormRow>
      <FormRow>
        <Controller
          name="email"
          control={control}
          rules={{
            required: true,
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Entered value does not match email format"
            },
          }}
          render={({ field }) => <Input placeholder="Email*" {...field} />}
        />
        {errors.email && <FormInputError>{errors.email?.message}</FormInputError>}
      </FormRow>
      <FormRow>
        <Controller
          name="city"
          control={control}
          render={({ field }) => <Input placeholder="City" {...field} />}
        />
      </FormRow>
      <FormRow>
      <ButtonsGroup>
        <FormButton danger href="/home">Cancel</FormButton>
        <FormButton success type="submit">Submit</FormButton>
      </ButtonsGroup>
      </FormRow>
    </Form>
  )
}

export default UserForm
