import { render } from '@testing-library/react'
import { Table, TBody, THead, Tr, Th, Td } from '.'

it('renders correctly', () => {
  const { container } = render(
    <Table>
      <THead>
        <Tr>
          <Th>Id</Th>
          <Th>Name</Th>
        </Tr>
      </THead>
      <TBody>
        <Tr>
          <Td>1</Td>
          <Td>John Doe</Td>
        </Tr>
      </TBody>
    </Table>
  )
  expect(container).toMatchSnapshot()
})
