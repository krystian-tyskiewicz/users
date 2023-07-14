import { render } from '@testing-library/react'
import FormRow from '.'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}))

it('renders correctly', () => {
  const { container } = render(<FormRow>Test</FormRow>)
  expect(container).toMatchSnapshot()
})
