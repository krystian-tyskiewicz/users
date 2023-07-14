import { render } from '@testing-library/react'

import Page from './page'
import { user } from '@/app/lib/mocks'

jest.mock('../../../../redux/services/users', () => ({
  useGetUserQuery: jest.fn().mockImplementation(() => ({
    isLoading: false,
    data: user,
  })),
  useEditUserMutation: jest.fn().mockReturnValue([])
}))
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}))

it('renders correctly', () => {
  const { container } = render(<Page params={{ id: '1234' }} />)
  expect(container).toMatchSnapshot()
})
