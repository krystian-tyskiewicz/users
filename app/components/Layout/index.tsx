'use client'

import { ReactNode } from 'react'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Helvetica, sans-serif;
    max-width: 960px;
    margin: 0 auto;
  }
`

const Wrapper = styled.main`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  margin-top: 32px;
  padding: 16px;
  display: flex;
  flex-direction: column;
`

type Props = {
  children: ReactNode,
  className?: string
}

const Main = ({ children, className }: Props) => (
  <Wrapper className={className}>
    <GlobalStyle />
    {children}
  </Wrapper>
)

export default Main
