import React from 'react';
import play from '../../assets/mainphoto.png'
import '../../styles/main.css';
const MainPage = (props) => {
  
  return (
    <>
      <div className="main-container">
        <div className="main-image">
          <img src={play} alt=""/>
        </div>
        <div className="main-desc">
          <h1>E-Run</h1>
          <h5>자료구조로 게임을 재밌게 배워보세요</h5>
          <button>시작하기</button>
        </div>
      </div>
      
    </>
  )

};

export default MainPage;