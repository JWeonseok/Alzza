import React from 'react';
import {Switch, Route} from 'react-router-dom'
import MainPage from '../views/mainPage/index'
import LoginPage from '../views/loginPage/index'
import SignupPage from '../views/signupPage/index'
import MyPage from '../views/myPage/index'
import GamePage from '../views/gamePage/index'
import GameDetailPage from '../views/gameDetailPage/index'
import Navi from '../component/navbar'
import StudyPage from '../views/studyPage/index'
import StudyDetailPage from '../views/studyDetailPage/index'
import NotFound from '../component/notFound';

import PublicRoute from './publicRoute';
import PrivateRoute from './privateRoute';

const routes = (
  <>

    <Navi/>

    {/* <Footer /> */}

    <Switch>
      {/* 메인페이지 */}
      {/* <Route exact path="/" component={MainPage}/> */}
      {/* 로그인 */}
      {/* <Route exact path="/login" component={LoginPage}/> */}
      {/* 회원가입 */}
      {/* <Route exact path="/signup" component={SignupPage}/> */}
      {/* 마이페이지 */}
      {/* <Route exact path="/mypage/:username" component={MyPage}/> */}
      {/* 게임페이지 */}
      {/* <Route exact path="/game/:category" component={GamePage}/> */}
      {/* 게임디테일 페이지 */}
      {/* <Route exact path="/game/:category/:gameId" component={GameDetailPage}/> */}
      {/* 설명 페이지 */}
      {/* <Route exact path="/study/:type" component={StudyPage}/> */}
      {/* 설명디테일 페이지 */}
      {/* <Route exact path="/study/:type/:id" component={StudyDetailPage}/> */}
      
      {/* restricted=true면 이미 로그인 된 상태에서 못가게 */}
      <PublicRoute exact restricted={false} path="/" component={MainPage}/>
      <PublicRoute exact restricted={true} path="/login" component={LoginPage}/>
      <PublicRoute exact restricted={true} path="/signup" component={SignupPage}/>
      <PublicRoute exact restricted={false} path="/study/:type" component={StudyPage}/>
      <PublicRoute exact restricted={false} path="/study/:type/:id" component={StudyDetailPage}/>
      <PublicRoute exact restricted={false} path="/game/:category" component={GamePage}/>
      <PrivateRoute exact path="/mypage/:username" component={MyPage}/>
      {/* <PrivateRoute exact path="/game/:category" component={GamePage}/> */}
      <PrivateRoute exact path="/game/:category/:gameId" component={GameDetailPage}/>
      <Route component={NotFound}/>
    </Switch>

  </>
)

export default routes