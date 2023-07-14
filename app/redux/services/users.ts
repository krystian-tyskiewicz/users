import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { User, UserInput } from '@/app/types'

export const usersApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => `users?_sort=username`,
      providesTags: ['Users'],
    }),
    getUser: builder.query<User, string>({
      query: (id) => `users/${id}`,
      providesTags: ['Users'],
    }),
    deleteUser: builder.mutation<void, string>({
      query: (id) => ({
        url: `users/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Users'],
    }),
    addUser: builder.mutation<void, UserInput>({
      query: (body) => ({
        url: `users`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Users'],
    }),
    editUser: builder.mutation<void, User>({
      query: ({ id, ...body }) => ({
        url: `users/${id}`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['Users'],
    }),
  }),
})

export const {
  useGetUsersQuery,
  useGetUserQuery,
  useDeleteUserMutation,
  useAddUserMutation,
  useEditUserMutation,
} = usersApi
