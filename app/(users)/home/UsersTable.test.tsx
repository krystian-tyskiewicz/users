import { render } from '@testing-library/react'

import UsersTable from './UsersTable'
import { user } from '@/app/lib/mocks'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}))

it('renders correctly', () => {
  const props = {
    users: [user],
    onUserDelete: jest.fn(),
  }
  const { container } = render(<UsersTable {...props} />)
  expect(container).toMatchSnapshot()
})
