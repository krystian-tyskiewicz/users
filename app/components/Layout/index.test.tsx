import { render } from '@testing-library/react'
import Layout from '.'

it('renders correctly', () => {
  const { container } = render(<Layout className="test">Test</Layout>)
  expect(container).toMatchSnapshot()
})
