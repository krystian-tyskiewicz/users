'use client'

import { styled } from 'styled-components'

import {
  Button,
  Modal,
  Title,
} from '@/app/components'

const Description = styled.div`
  margin: 16px 0;
`

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

const StyledButton = styled(Button)`
  margin-left: 8px;
`

type Props = {
  isOpen: boolean
  onClose: () => void
  onDelete: () => void
  userName?: string
}

const DeleteModal = ({ isOpen, onClose, onDelete, userName }: Props) => (
  <Modal isOpen={isOpen}>
    <Title>Delete</Title>
    <Description>Are you sure you want to delete user: {userName}?</Description>
    <ButtonsWrapper>
      <StyledButton info onClick={onClose}>Cancel</StyledButton>
      <StyledButton danger onClick={onDelete}>Delete</StyledButton>
    </ButtonsWrapper>
  </Modal>
)

export default DeleteModal
