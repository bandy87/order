import React, { FC } from 'react'
import { Modal } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, Dispatch } from '../../../store/store'
import { AuthLoginForm } from './AuthLoginForm'

const AuthModal: FC = () => {
  const authModalIsOpen = useSelector((state: RootState) => state.auth.authModalIsOpen)
  const dispatch = useDispatch<Dispatch>()

  const closeModal = () => {
    dispatch.auth.toggleModal(false)
  }

  return (
    <Modal
      visible={authModalIsOpen}
      title="Login"
      onCancel={() => closeModal()}
      footer={null}
    >
      <AuthLoginForm onLoggedIn={closeModal} />
    </Modal>
  )
}

export default AuthModal
