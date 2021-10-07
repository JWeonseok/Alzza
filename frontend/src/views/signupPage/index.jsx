import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import { signupUser, checkUserId } from '../../lib/store/store';
import { onIdValidation, onNameValidation, onNicknameValidation, onPasswordValidation, onConfirmPasswordValidation } from './validation';
// import logo from '../../assets/user.png'
import '../../styles/signup.css';
import { useMediaQuery } from 'react-responsive'

import logo11 from '../../assets/logo/logo11.png'

import swal from 'sweetalert';
const SignupPage = (props) => {
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [nickname, setNickname] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNum, setPhoneNum] = useState('')
  const [idErrorMessage, setIdErrorMessage] = useState('')
  const [idAcceptMessage, setIdAcceptMessage] = useState('')
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
        if (res.payload) {
          setIdErrorMessage("")
          setIdAcceptMessage("사용가능한 아이디입니다.")
        } else {
          setIdAcceptMessage("")
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
    if (checkValidation()) {
      let body = {
        userId: id,
        password: password,
        userName: name,
        userNickName: nickname,
        userTel: phoneNum,
        userEmail: email,
      }
      dispatch(signupUser(body)).then(() => {
        swal("정상적으로 가입되었습니다!", "로그인을 진행해 주세요", "success");
        props.history.push('/login')
      })
    } else {
      swal("회원가입에 실패했습니다", "올바르게 작성해주세요", "error");
    }
  }
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 800 })
  const isTabletOrMobile = useMediaQuery({ maxWidth: 800 })

  return (
    <>
      {isDesktopOrLaptop &&
        <div style={{ display: "flex", alignItems: "center", flexDirection: 'column' }}>
          <img src={logo11} alt="" style={{ width: "5%", margin: "30px" }} />
          <div style={{ width: "25%" }}>
            <form
              className="signupForm"
              onSubmit={onSubmit}
              style={{ display: 'flex', flexDirection: 'column', textAlign: 'start' }}
              action="/user"
              method="POST"
            >
              <div id="signup_line">
                <i className="fas fa-user" id="icon"></i>
                <input
                  type="text"
                  value={id}
                  onBlur={validId}
                  onChange={onIdHandle}
                  placeholder="아이디*"
                />
              </div>
              {
                idAcceptMessage ?
                  <p id="acceptmessage">{idAcceptMessage}</p>
                  :
                  <></>
              }
              {
                idErrorMessage ?
                  <p id="errormessage">{idErrorMessage}</p>
                  :
                  <></>
              }

              <div id="signup_line">
                <i className="fas fa-address-card" id="icon"></i>
                <input
                  type="text"
                  value={name}
                  onBlur={validName}
                  onChange={onNameHandle}
                  placeholder="이름*"
                />
              </div>
              {
                nameErrorMessage ?
                  <p id="errormessage">{nameErrorMessage}</p>
                  :
                  <></>
              }


              <div id="signup_line">
                <i className="fab fa-android" id="icon"></i>
                <input
                  type="text"
                  value={nickname}
                  onBlur={validNickname}
                  onChange={onNicknameHandle}
                  placeholder="닉네임*"
                />
              </div>
              {
                nicknameErrorMessage ?
                  <p id="errormessage">{nicknameErrorMessage}</p>
                  :
                  <></>
              }

              <div id="signup_line">
                <i className="fas fa-lock" id="icon"></i>
                <input
                  type="password"
                  value={password}
                  onBlur={validPassword}
                  onChange={onPasswordHandle}
                  placeholder="비밀번호*"
                />
              </div>
              {
                passwordErrorMessage ?
                  <p id="errormessage">{passwordErrorMessage}</p>
                  :
                  <></>
              }

              <div id="signup_line">
                <i className="fas fa-check-circle" id="icon"></i>
                <input
                  type="password"
                  value={confirmPassword}
                  onBlur={validConfirmPassword}
                  onChange={onConfirmPasswordHandle}
                  placeholder="비밀번호 확인*"
                />
              </div>
              {
                confirmPasswordErrorMessage ?
                  <p id="errormessage">{confirmPasswordErrorMessage}</p>
                  :
                  <></>
              }

              <div id="signup_line">
                <i className="fas fa-envelope" id="icon"></i>
                <input type="email" value={email} onChange={onEmailHandle} placeholder="이메일" />
              </div>

              <div id="signup_line">
                <i className="fas fa-phone" id="icon"></i>
                <input type="text" value={phoneNum} onChange={onPhoneNumHandle} placeholder="전화번호" />
              </div>

              <button className="signup_btn" type="submit">회원가입</button>
            </form>

          </div>
        </div>
      }
      {isTabletOrMobile &&
        <div style={{ display: "flex", alignItems: "center", flexDirection: 'column', height:"90%", justifyContent:"center"}}>
          <img src={logo11} alt="" style={{ width: "20%", margin: "10px" }} />
          <div style={{ width: "60%" }}>
            <form
              className="signupForm"
              onSubmit={onSubmit}
              style={{ display: 'flex', flexDirection: 'column', textAlign: 'start' }}
              action="/user"
              method="POST"
            >
              <div id="signup_line">
                <i className="fas fa-user" id="icon"></i>
                <input
                  type="text"
                  value={id}
                  onBlur={validId}
                  onChange={onIdHandle}
                  placeholder="아이디*"
                />
              </div>
              {
                idAcceptMessage ?
                  <p id="acceptmessage">{idAcceptMessage}</p>
                  :
                  <></>
              }
              {
                idErrorMessage ?
                  <p id="errormessage">{idErrorMessage}</p>
                  :
                  <></>
              }

              <div id="signup_line">
                <i className="fas fa-address-card" id="icon"></i>
                <input
                  type="text"
                  value={name}
                  onBlur={validName}
                  onChange={onNameHandle}
                  placeholder="이름*"
                />
              </div>
              {
                nameErrorMessage ?
                  <p id="errormessage">{nameErrorMessage}</p>
                  :
                  <></>
              }


              <div id="signup_line">
                <i className="fab fa-android" id="icon"></i>
                <input
                  type="text"
                  value={nickname}
                  onBlur={validNickname}
                  onChange={onNicknameHandle}
                  placeholder="닉네임*"
                />
              </div>
              {
                nicknameErrorMessage ?
                  <p id="errormessage">{nicknameErrorMessage}</p>
                  :
                  <></>
              }

              <div id="signup_line">
                <i className="fas fa-lock" id="icon"></i>
                <input
                  type="password"
                  value={password}
                  onBlur={validPassword}
                  onChange={onPasswordHandle}
                  placeholder="비밀번호*"
                />
              </div>
              {
                passwordErrorMessage ?
                  <p id="errormessage">{passwordErrorMessage}</p>
                  :
                  <></>
              }

              <div id="signup_line">
                <i className="fas fa-check-circle" id="icon"></i>
                <input
                  type="password"
                  value={confirmPassword}
                  onBlur={validConfirmPassword}
                  onChange={onConfirmPasswordHandle}
                  placeholder="비밀번호 확인*"
                />
              </div>
              {
                confirmPasswordErrorMessage ?
                  <p id="errormessage">{confirmPasswordErrorMessage}</p>
                  :
                  <></>
              }

              <div id="signup_line">
                <i className="fas fa-envelope" id="icon"></i>
                <input type="email" value={email} onChange={onEmailHandle} placeholder="이메일" />
              </div>

              <div id="signup_line">
                <i className="fas fa-phone" id="icon"></i>
                <input type="text" value={phoneNum} onChange={onPhoneNumHandle} placeholder="전화번호" />
              </div>

              <button className="signup_btn" type="submit">회원가입</button>
            </form>

          </div>
        </div>
      }
    </>
  )
};

export default withRouter(SignupPage);