import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getUserInfo } from '../../lib/store/store';

const MyPage = (props) => {
  const userId = props.match.params.username
  const accessToken = sessionStorage.getItem('accessToken')
  const refreshToken = sessionStorage.getItem('refreshToken')
  const [userInfo, setUserInfo] = useState({
    'userId': '',
    'userName': '',
    'userNickName': '',
    'userEmail': '',
    'userTel': '',
  })
  const dispatch = useDispatch()

  useEffect(() => {
    const body = {
      accessToken,
      refreshToken,
    }
    dispatch(getUserInfo(userId, body))
      .then((res) => {
        console.log('getUserInfo', res)
        const data = res.payload.data
        setUserInfo({
          'userId': data.userId,
          'userName': data.userName,
          'userNickName': data.userNickName,
          'userEmail': data.userEmail,
          'userTel': data.userTel,
        })
      })
  })
  
  return (
    <>
      <h1>{userId} 마이페이지</h1>
      <div>
        <button>비밀번호 변경</button>
        <button>회원 탈퇴</button>
      </div>
      <div className="userBoard">
        <div className="profile">
          HI
        </div>
        <div className="boardInfo">
          boardInfo
        </div>
      </div>
      <div className="userInfo">
        <p>아이디 : {userInfo.userId}</p>
        <p>이름 : {userInfo.userName}</p>
        <p>닉네임 : {userInfo.userNickName}</p>
        <p>이메일 : {userInfo.userEmail}</p>
        <p>전화번호 : {userInfo.userTel}</p>
      </div>
    </>
  )
};

export default MyPage;