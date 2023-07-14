import { render } from '@testing-library/react'
import FormInputError from '.'

it('renders correctly', () => {
  const { container } = render(<FormInputError>Test</FormInputError>)
  expect(container).toMatchSnapshot()
})
