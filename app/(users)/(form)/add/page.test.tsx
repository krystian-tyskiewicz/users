import { render } from '@testing-library/react'
import Page from './page'

jest.mock('../../../redux/services/users', () => ({
  useAddUserMutation: jest.fn().mockReturnValue([]),
}))
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}))

it('renders correctly', () => {
  const { container } = render(<Page />)
  expect(container).toMatchSnapshot()
})
