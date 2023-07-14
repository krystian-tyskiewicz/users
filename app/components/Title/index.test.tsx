import { render } from '@testing-library/react'
import Title from '.'

it('renders correctly', () => {
  const { container } = render(<Title>Test</Title>)
  expect(container).toMatchSnapshot()
})
