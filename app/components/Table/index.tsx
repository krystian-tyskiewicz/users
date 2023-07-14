'use client'

import styled, { css } from 'styled-components'

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`

export const THead = styled.thead``

export const TBody = styled.tbody``

export const Tr = styled.tr``

const cellStyles = css`
  border: 1px solid #dddddd;
  padding: 8px;
  text-align: left;
`

export const Th = styled.th`
  ${cellStyles};
  background-color: lightgray;
`

export const Td = styled.td`
  ${cellStyles};
`
