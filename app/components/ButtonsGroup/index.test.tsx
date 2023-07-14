import { render } from '@testing-library/react'
import ButtonsGroup from '.'

it('renders correctly', () => {
  const { container } = render(<ButtonsGroup />)
  expect(container).toMatchSnapshot()
})
