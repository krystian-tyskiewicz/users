'use client'

import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'
import styled from 'styled-components'

const Wrapper = styled.button<{$backgroundColor: string}>`
  background-color: ${props => props.$backgroundColor};
  border-radius: 5px;
  color: white;
  padding: 8px 12px;
  font-size: 12px;
  border: none;
  cursor: pointer;
`

type Props = {
  children: ReactNode
  href?: string
  onClick?: () => void
  type?: 'submit' | 'reset' | 'button' | undefined;
  primary?: boolean
  secondary?: boolean
  danger?: boolean
  info?: boolean
  success?: boolean
  className?: string
}

const Button = ({
  children,
  href,
  onClick,
  className,
  type = 'button',
  secondary = false,
  danger = false,
  info = false,
  success = false,
}: Props) => {
  const getColor = () => {
    if (danger) return '#B00020'
    if (secondary) return '#FFAC1C'
    if (info) return '#9e9e9e'
    if (success) return '#41C300'
    return '#1E90FF'
  }

  const router = useRouter()
  const backgroundColor = getColor()

  const handleClick = () => {
    onClick?.()
    href && router.push(href)
  }

  return (
    <Wrapper
      className={className}
      $backgroundColor={backgroundColor}
      onClick={handleClick}
      type={type}
    >
      {children}
    </Wrapper>
  )
}

export default Button
 