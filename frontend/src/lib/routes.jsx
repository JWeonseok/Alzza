import React from 'react';
import {Route, Switch} from 'react-router-dom'
import MainPage from '../views/mainPage/index'
import LoginPage from '../views/loginPage/index'
// import SignupPage from '../views/signupPage/index'
// import MyPage from '../views/myPage/index'
// import GamePage from '../views/gamePage/index'
// import GameDetailPage from '../views/gameDetailPage/index'
// import StudyPage from '../views/studyPage/index'
// import StudyDetailPage from '../views/studyDetailPage/index'
import Navbar from '../component/navbar'

const routes = (
  <>
    <Navbar/>

    {/* <Footer /> */}

    <Switch>
      {/* 메인페이지 */}
      <Route exact path="/" component={MainPage}/>
      {/* 로그인 */}
      <Route exact path="/login" component={LoginPage}/>
      {/* 회원가입 */}
      {/* <Route exact path="/signup" component={SignupPage}/> */}
      {/* 마이페이지 */}
      {/* <Route exact path="/mypage/:username" component={MyPage}/> */}
      {/* 게임페이지 */}
      {/* <Route exact path="/game" component={GamePage}/> */}
      {/* 게임디테일 페이지 */}
      {/* <Route exact path="/game/:gameId" component={GameDetailPage}/> */}
      {/* 설명 페이지 */}
      {/* <Route exact path="/study" component={StudyPage}/> */}
      {/* 설명디테일 페이지 */}
      {/* <Route exact path="/study/:studyTitle" component={StudyDetailPage}/> */}
      
    </Switch>

  </>
)

export default routes