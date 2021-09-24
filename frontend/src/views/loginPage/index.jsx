import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import { loginUser } from '../../lib/store/store';

const LoginPage = (props) => {
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const onIdHandle = (e) => {
    setId(e.currentTarget.value)
  }
  const onPasswordHandle = (e) => {
    setPassword(e.currentTarget.value)
  }

  const setToken = (payload) => {
    localStorage.setItem('accessToken', payload['jwt-access-token'])
    localStorage.setItem('refreshToken', payload['jwt-refresh-token'])
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(e.target)
    console.log(e.target[0].value)
    console.log(e.target[1].value)
    let body = {
      userId: id,
      password: password,
    }
    dispatch(loginUser(body))
      .then((res) => {
        console.log(res)
        alert(`반갑습니다! ${res.payload.data.userName}님`)
        setToken(res.payload.headers)
        props.history.push('/')
      })
      .catch((err) => {
        console.log(err)
        alert('아이디 혹은 비밀번호가 잘못되었습니다.')
      })
  }

  return (
    <>
      <h1>로그인</h1>
      <form
        className="loginForm"
        onSubmit={onSubmit}
        style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}
      >
        
        <div>
          <label>아이디</label>
          <input type="text" value={id} onChange={onIdHandle} />
        </div>

        <div>
          <label>비밀번호</label>
          <input type="password" value={password} onChange={onPasswordHandle} />
        </div>

        <button type="submit">로그인</button>
      </form>
    </>
  )
};

export default withRouter(LoginPage);