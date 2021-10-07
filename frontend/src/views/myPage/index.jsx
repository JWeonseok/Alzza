import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getUserInfo, getUserGameInfo } from '../../lib/store/store';
import { connect } from 'react-redux';
import Modal from '../../component/modal';
import './myPage.css';

import stack_badge from '../../assets/badges/stack_badge.png'
import queue_badge from '../../assets/badges/queue_badge.png'
import tree_badge from '../../assets/badges/tree_badge.png'
import graph_badge from '../../assets/badges/graph_badge.png'
import binarysearch_badge from '../../assets/badges/binarysearch_badge.png'
import sort_badge from '../../assets/badges/sort_badge.png'
import gray_egg from '../../assets/badges/gray_egg.png'

import { useMediaQuery } from 'react-responsive'

const MyPage = (props) => {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 800 })
  const isTabletOrMobile = useMediaQuery({ maxWidth: 800 })

  const noClearBadges = [
    { id: 1, img: gray_egg },
    { id: 2, img: gray_egg },
    { id: 3, img: gray_egg },
    { id: 4, img: gray_egg },
    { id: 5, img: gray_egg },
    { id: 6, img: gray_egg }
  ]

  const badges = [
    { id: 1, img: stack_badge },
    { id: 2, img: queue_badge },
    { id: 3, img: graph_badge },
    { id: 4, img: tree_badge },
    { id: 5, img: sort_badge },
    { id: 6, img: binarysearch_badge }
  ]


  const userId = props.match.params.username
  const accessToken = sessionStorage.getItem('accessToken')
  const refreshToken = sessionStorage.getItem('refreshToken')
  const [userInfoUpdateModalOn, setUserInfoUpdateModalOn] = useState(false)
  const [userDeleteModalOn, setUserDeleteModalOn] = useState(false)
  const [userPasswordUpdateModalOn, setUserPasswordUpdateModalOn] = useState(false)
  const [userGameInfo, setUserGameInfo] = useState([])
  let [userInfo, setUserInfo] = useState({
    'userId': '',
    'userName': '',
    'userNickName': '',
    'userEmail': '',
    'userTel': '',
  })

  const userInfoUpdate = {
    'userId': props.state.userid,
    'userName': props.state.name,
    'userNickName': props.state.nickname,
    'userEmail': props.state.email,
    'userTel': props.state.tel,
  }

  const dispatch = useDispatch()
  const matchInfo = {
    'userId': '아이디',
    'userName': '이름',
    'userNickName': '닉네임',
    'userEmail': '이메일',
    'userTel': '전화번호',
  }

  const handleUserInfoUpdateModal = () => {
    setUserInfoUpdateModalOn(!userInfoUpdateModalOn)
  }
  const handleUserDeleteModal = () => {
    setUserDeleteModalOn(!userDeleteModalOn)
  }
  const handleUserPasswordUpdateModal = () => {
    setUserPasswordUpdateModalOn(!userPasswordUpdateModalOn)
  }

  useEffect(() => {
    const body = {
      accessToken,
      refreshToken,
    }
    if (body.accessToken) {
      dispatch(getUserInfo(userId, body))
        .then((res) => {
          const data = res.payload.data
          setUserInfo({
            'userId': data.userId,
            'userName': data.userName,
            'userNickName': data.userNickName,
            'userEmail': data.userEmail,
            'userTel': data.userTel,
          })
        })
      
      dispatch(getUserGameInfo(userId, body))
        .then((res) => {
          const data = res.payload
          setUserGameInfo(data)
        })
    }
  }, [userId, accessToken, dispatch, refreshToken])

  let array = []
  let i = 0
  
  if (props.state.isUpdate) {
    for (const key in userInfoUpdate) {
      i++
      const value = userInfoUpdate[key] ? userInfoUpdate[key] : '-'
      array.push(
        <li key={i}>
          <div className="user-info-key">{matchInfo[key]}</div>
          <input className="user-info-input" type="text" placeholder={value} disabled />
        </li>
      )
    }
  } else {
    for (const key in userInfo) {
      i++
      const value = userInfo[key] ? userInfo[key] : '-'
      array.push(
        <li key={i}>
          <div className="user-info-key">{matchInfo[key]}</div>
          <input className="user-info-input" type="text" placeholder={value} disabled />
        </li>
      )
    }
  }

  for (let j = 0; j < userGameInfo.length; j++) {
    noClearBadges[badges[userGameInfo[j].gameCode - 1].id - 1] = badges[userGameInfo[j].gameCode - 1]
  }

  let badge_array = []
  for (let k = 0; k < noClearBadges.length; k++) {
    badge_array.push(
      <div key={noClearBadges[k].id} style={{ width: "16.66%", display: "flex" }}>
        <img src={noClearBadges[k].img} alt="" style={{ width: "90%" }} />
      </div>
    )
  }

  return (
    <>
      {isDesktopOrLaptop &&
        <>
          <h1 style={{ marginBottom: "20px", marginTop: "80px", fontWeight: "900" }}> 마이페이지</h1>
          <section className="mypage-main">
            <div style={{ display: "flex", justifyContent: "end", width: "97%", marginBottom: "5px" }}>
              <button className="mypagebutton" onClick={handleUserInfoUpdateModal}>회원정보 수정</button>
              <button className="mypagebutton" onClick={handleUserPasswordUpdateModal}>비밀번호 변경</button>
              <button className="mypagebutton" onClick={handleUserDeleteModal}>회원 탈퇴</button>
            </div>
            <section className="user-board">
              <div className="board-info">
                <div style={{ height: "10%", textAlign: "left", paddingLeft: "10px", paddingTop: "10px", fontWeight: "bold", fontSize: "1.1rem" }}>
                  당신의 업적
                </div>
                <div style={{ padding: "0", display: "flex", flexDirection: "row", width: "100%", height: "90%", alignItems: "center", justifyContent: "center" }}>
                  {badge_array}
                </div>
                {/* <div>
              Badge
            </div> */}
              </div>
            </section>
            <ul className="user-info">
              {array}
            </ul>
          </section>
          <div>
           {userInfoUpdateModalOn && !props.state.isUpdate &&
              <Modal
                modalType="InfoUpdateModal"
                onClose={handleUserInfoUpdateModal}
                {...userInfo}
              />
            }
            {userInfoUpdateModalOn && props.state.isUpdate &&
              <Modal
                modalType="InfoUpdateModal"
                onClose={handleUserInfoUpdateModal}
                {...userInfoUpdate}
              />
            }
            {userDeleteModalOn &&
              <Modal
                modalType="UserDeleteModal"
                onClose={handleUserDeleteModal}
                {...userInfo}
              />
            }
            {userPasswordUpdateModalOn &&
              <Modal
                modalType="PasswordUpdateModal"
                onClose={handleUserPasswordUpdateModal}
              />
            }
          </div>
        </>
      }
      {isTabletOrMobile &&
        <>
          <h1 style={{ marginBottom: "20px", marginTop: "80px", fontWeight: "900" }}> 마이페이지</h1>
          <section className="mypage-main-mobile">
            <div style={{ display: "flex", justifyContent: "center", width: "97%", marginBottom: "5px" }}>
              <button className="mypagebutton-mobile" onClick={handleUserInfoUpdateModal}>회원정보 수정</button>
              <button className="mypagebutton-mobile" onClick={handleUserPasswordUpdateModal}>비밀번호 변경</button>
              <button className="mypagebutton-mobile" onClick={handleUserDeleteModal}>회원 탈퇴</button>
            </div>
            <section className="user-board-mobile">
              <div className="board-info">
                <div style={{ height: "10%", textAlign: "left", paddingLeft: "10px", paddingTop: "10px", fontWeight: "bold", fontSize: "1.1rem" }}>
                  당신의 업적
                </div>
                <div style={{ padding: "0", display: "flex", flexDirection: "row", width: "100%", height: "90%", alignItems: "center", justifyContent: "center" }}>
                  {badge_array}
                </div>
                {/* <div>
              Badge
            </div> */}
              </div>
            </section>
            <ul className="user-info-mobile">
              {array}
            </ul>
          </section>
          <div>
            {userInfoUpdateModalOn &&
              <Modal
                modalType="InfoUpdateModal"
                onClose={handleUserInfoUpdateModal}
                {...userInfo}
              />
            }
            {userDeleteModalOn &&
              <Modal
                modalType="UserDeleteModal"
                onClose={handleUserDeleteModal}
                {...userInfo}
              />
            }
            {userPasswordUpdateModalOn &&
              <Modal
                modalType="PasswordUpdateModal"
                onClose={handleUserPasswordUpdateModal}
              />
            }
          </div>
        </>

      }
    </>
  )
};

// export default MyPage;

function statetoprops(state) {
  return {
    state: state
  }
}

export default connect(statetoprops)(MyPage);