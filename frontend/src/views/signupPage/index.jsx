import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import { signupUser, checkUserId } from '../../lib/store/store';
import { onIdValidation, onNameValidation, onNicknameValidation, onPasswordValidation, onConfirmPasswordValidation } from './validation';

const SignupPage = (props) => {
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [nickname, setNickname] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNum, setPhoneNum] = useState('')
  const [idErrorMessage, setIdErrorMessage] = useState('')
  const [nameErrorMessage, setNameErrorMessage] = useState('')
  const [nicknameErrorMessage, setNicknameErrorMessage] = useState('')
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('')
  const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] = useState('')
  // const [validationCheck, setValidationCheck] = useState(0)
  const dispatch = useDispatch()
  

  const onIdHandle = (e) => {
    setId(e.currentTarget.value)
  }
  const onNameHandle = (e) => {
    setName(e.currentTarget.value)
  }
  const onNicknameHandle = (e) => {
    setNickname(e.currentTarget.value)
  }
  const onPasswordHandle = (e) => {
    setPassword(e.currentTarget.value)
  }
  const onConfirmPasswordHandle = (e) => {
    setConfirmPassword(e.currentTarget.value)
  }
  const onEmailHandle = (e) => {
    setEmail(e.currentTarget.value)
  }
  const onPhoneNumHandle = (e) => {
    setPhoneNum(e.currentTarget.value)
  }

  // Validation Handling 함수들
  const validId = (e) => {
    const result = onIdValidation(e.target.value)
    if (result !== "") {
      setIdErrorMessage(result)
    } else {
      dispatch(checkUserId(e.target.value, {})).then((res) => {
        console.log(res)
        if (res.payload) {
          alert('사용가능한 아이디입니다!')
          setIdErrorMessage("")
        } else {
          setIdErrorMessage("이미 존재하는 아이디입니다.")
        }
      })
    }
  }
  const validName = (e) => {
    setNameErrorMessage(onNameValidation(e.target.value))
  }
  const validNickname = (e) => {
    setNicknameErrorMessage(onNicknameValidation(e.target.value))
  }
  const validPassword = (e) => {
    setPasswordErrorMessage(onPasswordValidation(e.target.value))
    setConfirmPasswordErrorMessage(onConfirmPasswordValidation(e.target.value, confirmPassword))
  }
  const validConfirmPassword = (e) => {
    setConfirmPasswordErrorMessage(onConfirmPasswordValidation(password, e.target.value))
  }

  const checkValidation = () => {
    if (idErrorMessage === "" && nameErrorMessage === "" && nicknameErrorMessage === "" && passwordErrorMessage === "" && confirmPasswordErrorMessage === "") {
      if (id !== "" && password !== "" && name !== "" && nickname !== "" && confirmPassword !== "") {
        return true
      }
    }
    return false
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(e)
    if (checkValidation()) {
      let body = {
        userId: id,
        password: password,
        userName: name,
        userNickName: nickname,
        userTel: phoneNum,
        userEmail: email,
      }
      dispatch(signupUser(body)).then((res) => {
        console.log(res)
        alert('정상적으로 가입되었습니다!')
        props.history.push('/login')
      })
    } else {
      alert('올바르게 작성해주세요!')
    }
  }


  return (
    <>
      <h1>회원가입</h1>
      <form
        className="signupForm"
        onSubmit={onSubmit}
        style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
        action="/user"
        method="POST"
      >
        <div>
          <label>아이디*</label>
          <input
            type="text"
            value={id}
            onBlur={validId}
            onChange={onIdHandle}
          />
          <p>{idErrorMessage}</p>
        </div>

        <div>
          <label>이름*</label>
          <input
            type="text"
            value={name}
            onBlur={validName}
            onChange={onNameHandle}
          />
          <p>{nameErrorMessage}</p>
        </div>

        <div>
          <label>닉네임*</label>
          <input
            type="text"
            value={nickname}
            onBlur={validNickname}
            onChange={onNicknameHandle}
          />
          <p>{nicknameErrorMessage}</p>
        </div>

        <div>
          <label>비밀번호*</label>
          <input
            type="password"
            value={password}
            onBlur={validPassword}
            onChange={onPasswordHandle}
          />
          <p>{passwordErrorMessage}</p>
        </div>

        <div>
          <label>비밀번호 확인*</label>
          <input
            type="password"
            value={confirmPassword}
            onBlur={validConfirmPassword}
            onChange={onConfirmPasswordHandle}
          />
          <p>{confirmPasswordErrorMessage}</p>
        </div>
        
        <div>
          <label>이메일</label>
          <input type="email" value={email} onChange={onEmailHandle} />
        </div>

        <div>
          <label>전화번호</label>
          <input type="text" value={phoneNum} onChange={onPhoneNumHandle} />
        </div>

        <button type="submit">회원가입</button>
      </form>
    </>
  )
};

export default withRouter(SignupPage);