import { render } from '@testing-library/react'
import Modal from '.'

it('renders correctly', () => {
  const { container } = render(<Modal isOpen>Test</Modal>)
  expect(container).toMatchSnapshot()
})
