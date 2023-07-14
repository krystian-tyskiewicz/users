'use client'

import ReactModal from 'react-modal'
import { ReactNode } from 'react'

type Props = {
  isOpen: boolean
  children: ReactNode
}

const Modal = ({ isOpen, children }: Props) => {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
    },
  };

  return (
    <ReactModal
      style={customStyles}
      isOpen={isOpen}
      contentLabel="Example Modal"
      ariaHideApp={false}
    >
      {children}
    </ReactModal>
  )
}

export default Modal
