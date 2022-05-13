import { FC } from "react";
import { Modal } from "antd";
import { useSelector, connect } from "react-redux";
import { RootState, Dispatch } from "../../../store/store";
import { AuthLoginForm } from "./AuthLoginForm";

const mapDispatch = (dispatch: Dispatch) => ({
  closeModal: () => {
    dispatch.auth.toggleModal(false);
  },
});

type DispatchProps = ReturnType<typeof mapDispatch>;
type Props = DispatchProps;

const AuthModal: FC<Props> = ({ closeModal }) => {
  const authModalIsOpen = useSelector(
    (state: RootState) => state.auth.authModalIsOpen
  );

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
export default connect(undefined, mapDispatch)(AuthModal);
