import { render } from '@testing-library/react'

import DeleteModal from './DeleteModal'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}))

it('renders correctly', () => {
  const props = {
    isOpen: true,
    onClose: jest.fn(),
    onDelete: jest.fn(),
  }
  const { container } = render(<DeleteModal {...props} />)
  expect(container).toMatchSnapshot()
})
