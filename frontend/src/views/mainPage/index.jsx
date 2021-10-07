import React from 'react';
import test2 from '../../assets/test2.png'
import '../../styles/main.css';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'
import logo4 from '../../assets/logo/logo4.png'

const MainPage = (props) => {

  const isDesktopOrLaptop = useMediaQuery({ minWidth: 800 })
  const isTabletOrMobile = useMediaQuery({ maxWidth: 800 })

  return (
    <>
      <div className="main-container">
        {isDesktopOrLaptop &&
          <>
            <div className="big-blue-circle"></div>
            <div className="man-computer"><img src={test2} alt=""></img></div>
            <div className="blue-triangle"></div>
            <div className="small-blue-circle"></div>

            <div className="test-desc">
              {/* <p id="maintitle" style={{ marginBottom: "30px", fontSize: "100px", fontWeight: "bold" }}>알짜배기</p> */}
              <img src={logo4} alt="" style={{ width: "45%", marginBottom: "20px" }} />
              {/* <img src={logo5} alt="" style={{width:"60%", marginBottom:"20px"}}/> */}
              {/* <img src={logo7} alt="" style={{width:"60%", marginBottom:"20px"}}/> */}
              <h5 className="desc">게임으로 배우는 <mark className="highlight">알</mark>고리즘과 <mark className="highlight">짜</mark>료구조</h5>
              <p>가장 중요한 기초 개념들을 모아 놓은 알짜배기에서</p>
              <p>당신의 프로그래밍 역량을 키워보세요!</p>
              <Link to="/game/ds">
                <button className="startBtn">시작하기</button>
              </Link>
            </div>
          </>
        }
        {isTabletOrMobile &&
          <>
            <div className="big-blue-circle-res"></div>
            <div className="big-blue-circle-res1"></div>
            <div className="big-blue-circle-res2"></div>
            <div className="man-computer-res"><img src={test2} alt=""></img></div>
            <div className="blue-triangle-res"></div>
            <div className="blue-triangle-res2"></div>
            {/* <div className="small-blue-circle-res"></div> */}
            <div className="main-res">
              <div className="main-card">
                <div className="title">
                  <img src={logo4} alt="" style={{ width: "60%", marginBottom: "10px" }} />
                </div>
                <div className="desc">
                  <h5 className="slogan">게임으로 배우는 <mark className="highlight">알</mark>고리즘과 <mark className="highlight">짜</mark>료구조</h5>
                  <div className="add">
                    가장 중요한 기초 개념들을 모아 놓은 알짜배기에서 <br></br> 당신의 프로그래밍 역량을 키워보세요!
                  </div>
                </div>
                <div className="btn">
                  <Link to="/game/ds">
                    <button className="startBtn">시작하기</button>
                  </Link>
                </div>
              </div>
            </div>
          </>
        }
      </div>
    </>
  )
};

export default MainPage;