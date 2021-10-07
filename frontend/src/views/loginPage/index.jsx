import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { withRouter } from 'react-router';
import { loginUser } from '../../lib/store/store';
import { connect } from 'react-redux';
import '../../styles/login.css';

import { useMediaQuery } from 'react-responsive'
import swal from 'sweetalert';

import logo12 from '../../assets/logo/logo12.png'
import logo11 from '../../assets/logo/logo11.png'


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
    sessionStorage.setItem('accessToken', payload['jwt-access-token'])
    sessionStorage.setItem('refreshToken', payload['jwt-refresh-token'])
  }

  const setUserId = (payload) => {
    sessionStorage.setItem('userId', payload)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    let body = {
      userId: id,
      password: password,
    }
    dispatch(loginUser(body))
      .then((res) => {
        setToken(res.payload.headers)
        setUserId(res.payload.data.userId)
        props.history.push('/')
      })
      .catch((err) => {
        swal("로그인에 실패했습니다.", "아이디 혹은 비밀번호를 확인해주세요!", "error");
      })
  }

  const isDesktopOrLaptop = useMediaQuery({ minWidth: 800 })
  const isTabletOrMobile = useMediaQuery({ maxWidth: 800 })
  return (
    <>
      {isDesktopOrLaptop &&
        <div style={{ display: "flex", height: "90%" }}>
          {/* <div style={{ width: "50%", justifyContent:"center", alignItems:"center", display:"flex" }}>
            <img src={logo7} alt="" style={{ width: "100%"}} />
          </div> */}
          {/* <div style={{ width: "50%"}}>
            <img src={logo9} alt="" style={{ width: "100%", height:"100%"}} />
          </div> */}
          {/* <div style={{ width: "50%", justifyContent:"center", alignItems:"center", display:"flex" }}>
            <img src={logo8} alt="" style={{ width: "100%", height:"100%"}} />
          </div>
          <div style={{ width: "50%", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}> */}
          {/* <div style={{ width: "50%", justifyContent:"center", alignItems:"center", display:"flex" }}>
            <img src={logo1} alt="" style={{ width: "50%"}} />
          </div> */}
          {/* <div style={{ width: "50%", justifyContent:"center", alignItems:"center", display:"flex" }}>
            <img src={logo4} alt="" style={{ width: "50%"}} />
          </div> */}
          <div style={{ width: "50%", justifyContent: "center", alignItems: "center", display: "flex" }}>
            <img src={logo12} alt="" style={{ width: "70%" }} />
          </div>


          <div style={{ width: "50%", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

            {/* <img src={logo} alt="" style={{ width: "10%", marginBottom: "50px" }} /> */}
            <h1 style={{ marginBottom: "70px", fontWeight: "900" }}>로그인</h1>
            <form
              className="loginForm"
              onSubmit={onSubmit}
              style={{ width: "40%", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
            >

              <div id="id_line">
                <i className="fas fa-user" id="idIcon"></i>
                <input type="text" style={{ width: "100%" }} value={id} onChange={onIdHandle} placeholder="아이디"
                />
              </div>

              <div id="pw_line">
                <i className="fas fa-lock" id="pwIcon"></i>
                <input type="password" style={{ width: "100%" }} value={password} onChange={onPasswordHandle} placeholder="패스워드" />
              </div>

              <button className="etcBtn" type="submit">LOGIN</button>
            </form>
          </div>
        </div>
      }
      {isTabletOrMobile &&
        <div style={{ display: "flex", height: "90%", justifyContent:"center" }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: "50%", justifyContent: "center", alignItems: "center", display: "flex" }}>
              <img src={logo11} alt="" style={{ width: "50%", marginBottom:"50px" }} />
            </div>
            <form
              className="loginForm"
              onSubmit={onSubmit}
              style={{ width: "60%", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
            >

              <div id="id_line">
                <i className="fas fa-user" id="idIcon"></i>
                <input type="text" style={{ width: "100%" }} value={id} onChange={onIdHandle} placeholder="아이디"
                />
              </div>

              <div id="pw_line">
                <i className="fas fa-lock" id="pwIcon"></i>
                <input type="password" style={{ width: "100%" }} value={password} onChange={onPasswordHandle} placeholder="패스워드" />
              </div>

              <button className="etcBtn" type="submit">LOGIN</button>
            </form>
          </div>
        </div>
      }
    </>
  )
};

function statetoprops(state) {
  return {
    state: state
  }
}

// export default withRouter(LoginPage);
export default connect(statetoprops)(LoginPage);