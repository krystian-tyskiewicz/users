'use client'

import styled from 'styled-components'

import { Layout } from '@/app/components'
import media from '@/app/lib/media'

type Props = {
  children: React.ReactNode
}

const StyledLayout = styled(Layout)`
  margin: 32px auto;
  max-width: 50vw;

  ${media.tablet} {
    max-width: 100%;
  }
`

const FormLayout = ({ children }: Props) => (
  <StyledLayout>{children}</StyledLayout>
)

export default FormLayout
