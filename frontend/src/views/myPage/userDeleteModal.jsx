import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { deleteUser } from '../../lib/store/store';
import { connect } from 'react-redux';
import swal from 'sweetalert';
const UserDeleteModal = (props) => {
  const userId = sessionStorage.getItem('userId')
  const accessToken = sessionStorage.getItem('accessToken')
  const refreshToken = sessionStorage.getItem('refreshToken')
  const dispatch = useDispatch()
  const router = useHistory()

  const onSubmit = () => {
    const body = {
      accessToken,
      refreshToken,
    }
    dispatch(deleteUser(userId, body))
      .then(() => {
        swal("정상적으로 탈퇴되었습니다.", "그동안 알짜배기를 이용해주셔서 감사합니다.", "success");
        sessionStorage.removeItem('accessToken')
        sessionStorage.removeItem('refreshToken')
        sessionStorage.removeItem('userId')
        props.onClose()
        router.push("/");
      })
      .catch(() => {
        swal("에러발생", "다시 시도해주세요!", "error");
      })
  }

  return (
    <>
      <div style={{ fontWeight: 'bold', width:'100%', textAlign:"center",fontSize:"25px" }}>회원탈퇴</div>
      <hr style={{color:"#6B76FF"}}/>
      <div style={{ fontWeight: 'bold', width:'100%', textAlign:"center", fontSize:"20px",marginBottom: "30px", marginTop:"30px" }}>정말로 탈퇴하시겠습니까?</div>
      <div className="form-btn">
        <button className="delete-btn" onClick={onSubmit}>탈퇴</button>
        <button className="cancel-btn" onClick={props.onClose}>취소</button>
      </div>
    </>
  )
};

// export default UserDeleteModal;


function statetoprops(state) {
  return {
    state: state
  }
}

export default connect (statetoprops)(UserDeleteModal);