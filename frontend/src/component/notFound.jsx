import React from 'react';
import '../styles/main.css';
// import egg from '../assets/logo11.png'
// import alzza from '../assets/alzza.png'
// import img from '../assets/404.png'
import img1 from '../assets/404_1.png'

const NotFound = () => {
    return (
      <div className="error-container">
        <div className="error-title">
          {/* <h1>4</h1><img src={egg} alt="" className="error-egg"/><h1>4</h1> */}
          <img src={img1} alt="" className="error-img"/>
        </div>      
        <h2>요청한 페이지를 찾을 수 없습니다. 다시 시도해주세요 :)</h2>
        {/* <img src={alzza} alt="" className="error-alzza"/> */}
      </div>
    )
}

export default NotFound;



