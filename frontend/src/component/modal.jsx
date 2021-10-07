import { createPortal } from "react-dom";
import '../styles/modal.css'
import InfoUpdateModal from '../views/myPage/infoUpdateModal';
import UserDeleteModal from '../views/myPage/userDeleteModal';
import PasswordUpdateModal from '../views/myPage/passwordUpdateModal';

function Modal(props) {
  const userInfo = {
    'userId': props.userId,
    'userName': props.userName,
    'userNickName': props.userNickName,
    'userEmail': props.userEmail,
    'userTel': props.userTel,
  }
  const onClose = props.onClose

  return createPortal(
    <div className="modalWrapper">
      <div className="modalOverlay">
        <div className="modalInner">
          {(props.modalType === "InfoUpdateModal") &&
            <InfoUpdateModal
              onClose={onClose}
              {...userInfo}
            />
          }
          {(props.modalType === "UserDeleteModal") &&
            <UserDeleteModal
              onClose={onClose}
            />
          }
          {(props.modalType === "PasswordUpdateModal") &&
            <PasswordUpdateModal
              onClose={onClose}
            />
          }
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
}

export default Modal;