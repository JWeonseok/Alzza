import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUserInfo } from '../../lib/store/store';
import { onNicknameValidation } from '../signupPage/validation';
import { connect } from 'react-redux';
import swal from 'sweetalert';
const InfoUpdateModal = (props) => {
  const userId = sessionStorage.getItem('userId')
  const accessToken = sessionStorage.getItem('accessToken')
  const refreshToken = sessionStorage.getItem('refreshToken')
  const [email, setEmail] = useState(props.userEmail)
  const [phoneNum, setPhoneNum] = useState(props.userTel)
  const [nickname, setNickname] = useState(props.userNickName)
  const [nicknameErrorMessage, setNicknameErrorMessage] = useState('')
  const dispatch = useDispatch()


  const onNicknameHandle = (e) => {
    setNickname(e.currentTarget.value)
  }
  const onEmailHandle = (e) => {
    setEmail(e.currentTarget.value)
  }
  const onPhoneNumHandle = (e) => {
    setPhoneNum(e.currentTarget.value)
  }

  const validNickname = (e) => {
    setNicknameErrorMessage(onNicknameValidation(e.target.value))
  }

  const checkValidation = () => {
    if (nicknameErrorMessage === "" && nickname !== "") {
      return true
    }
    return false
  }

  const onSubmit = () => {
    const body = {
      accessToken,
      refreshToken,
      userId,
      userNickName: nickname,
      userTel: phoneNum,
      userEmail: email,
    }
    if (checkValidation()) {
      props.dispatch({type: 'UPDATE_MYPAGE', payload: body});
      dispatch(updateUserInfo(body))
        .then(() => {
          swal("회원정보 수정 완료", "회원 정보 수정이 완료되었습니다.", "success");
          props.onClose()
        })
        .catch(() => {
          swal("회원정보 변경 실패", "다시 시도해주세요!", "error");
        })
    } else {
      swal("회원정보 변경 실패", "올바르게 작성해 주세요!", "error");
    }
  }

  return (
    <>
      <div style={{ fontWeight: 'bold', width:'100%', textAlign:"center",fontSize:"25px" }}>회원정보 수정</div>
      <hr style={{color:"#6B76FF", marginBottom:"25px"}}/>
      <ul className="info-update-form">
        <li>
          <div className="info-update-title">아이디</div>
          <input
            className="info-update-input"
            type="text"
            value={props.userId}
            disabled
          />
        </li>
        <li>
          <div className="info-update-title">이름</div>
          <input
            className="info-update-input"
            type="text"
            value={props.userName}
            disabled
          />
        </li>
        <li>
          <div className="info-update-title">닉네임</div>
          <input
            className="info-update-input"
            type="text"
            value={nickname}
            onBlur={validNickname}
            onChange={onNicknameHandle}
            placeholder={nickname}
          />
        </li>
        {
          nicknameErrorMessage ? 
          <p id="errormessage">{nicknameErrorMessage}</p>
          :
          <></>
        }
        <li >
          <div className="info-update-title">이메일</div>
          <input
            className="info-update-input"
            type="email"
            value={email}
            onChange={onEmailHandle}
            placeholder={email ? email : '이메일'}
          />
        </li>
        <li >
          <div className="info-update-title">전화번호</div>
          <input
            className="info-update-input"
            type="text"
            value={phoneNum}
            onChange={onPhoneNumHandle}
            placeholder={phoneNum ? phoneNum : '전화번호'}
          />
        </li>
      </ul>
      <div className="form-btn">
        <button className="update-btn" onClick={onSubmit}>수정</button>
        <button className="cancel-btn" onClick={props.onClose}>취소</button>
      </div>
    </>
  )
};

// export default InfoUpdateModal;

function statetoprops(state) {
  return {
    state: state
  }
}

export default connect (statetoprops)(InfoUpdateModal);