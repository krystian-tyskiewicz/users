import { render } from '@testing-library/react'
import Form from './Form'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}))

it('renders correctly', () => {
  const props = {
    onSubmit: jest.fn(),
  }
  const { container } = render(<Form {...props} />)
  expect(container).toMatchSnapshot()
})
