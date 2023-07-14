import { render } from '@testing-library/react'
import Input from '.'

it('renders correctly', () => {
  const { container } = render(<Input />)
  expect(container).toMatchSnapshot()
})
