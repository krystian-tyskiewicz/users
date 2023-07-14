import { render } from '@testing-library/react'
import Layout from './layout'

it('renders correctly', () => {
  const { container } = render(<Layout>Test</Layout>)
  expect(container).toMatchSnapshot()
})
