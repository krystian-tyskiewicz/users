import { render } from '@testing-library/react'

import Page from './page'
import { user } from '@/app/lib/mocks'

jest.mock('../../redux/services/users', () => ({
  useGetUsersQuery: jest.fn().mockImplementation(() => ({
    isLoading: false,
    data: [user],
  })),
  useDeleteUserMutation: jest.fn().mockReturnValue([])
}))
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}))
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}))

it('renders correctly', () => {
  const { container } = render(<Page />)
  expect(container).toMatchSnapshot()
})
