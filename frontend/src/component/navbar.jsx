import {Link} from 'react-router-dom'
import '../styles/main.css';

function Navbar(){
  const username = ""
  return (
    <div className="navbar">
      <div><Link to='/' >로고</Link></div>
      <div className="content-navbar">
        <div className="content"><Link to='/game'>게임</Link></div>
        <div className="content"><Link to='/study'>학습</Link></div>
        { username ? 
          <div><Link to={'/mypage/' + username}>마이페이지</Link></div>
          :
          <></>
        }
      </div>
      <div className="auth-navbar">
        {username ?
            <div>로그아웃</div>
          :
          <>
            <div className="content"><Link to='/login' >로그인</Link></div>
            <div className="content"><Link to='/signup' >회원가입</Link></div>
          </>
        }
      </div>
    </div>
  )
}

export default Navbar;