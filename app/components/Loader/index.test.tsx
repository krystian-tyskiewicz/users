import { render } from '@testing-library/react'
import Loader from '.'

it('renders correctly', () => {
  const { container } = render(<Loader />)
  expect(container).toMatchSnapshot()
})
