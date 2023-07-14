import { render } from '@testing-library/react'
import FormRow from '.'

it('renders correctly', () => {
  const { container } = render(<FormRow>Test</FormRow>)
  expect(container).toMatchSnapshot()
})
