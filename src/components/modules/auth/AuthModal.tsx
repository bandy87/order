import { FC, useCallback } from "react";
import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState, Dispatch } from "../../../store/store";
import { AuthLoginForm } from "./AuthLoginForm";

const AuthModal: FC = () => {
  const authModalIsOpen = useSelector(
    (state: RootState) => state.auth.authModalIsOpen
  );
  const dispatch = useDispatch<Dispatch>();
  const closeModal = useCallback(() => {
    dispatch.auth.toggleModal(false);
  }, [dispatch]);

  return (
    <Modal
      visible={authModalIsOpen}
      title="Login"
      onCancel={closeModal}
      footer={null}
    >
      <AuthLoginForm onLoggedIn={closeModal} />
    </Modal>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
export default AuthModal;
