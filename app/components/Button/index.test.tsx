import { render } from '@testing-library/react'
import Button from '.'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}))

it('renders correctly', () => {
  const { container } = render(<Button>Test</Button>)
  expect(container).toMatchSnapshot()
})
