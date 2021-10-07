import { Container, OverlayTrigger, Tooltip } from 'react-bootstrap'
import '../../../styles/studyCard.css';
import { useMediaQuery } from 'react-responsive'
import {Link} from 'react-router-dom';

import queue_thumnail from '../../../assets/study/queue_thumnail.png'
import queue1 from '../../../assets/study/queue1.PNG'
import queue3 from '../../../assets/study/queue3.jpg'

import queuegameimage from '../../../assets/game/queue.png'


import '../../../styles/studyCard.css';


function Queue() {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 800 })
  const isTabletOrMobile = useMediaQuery({ maxWidth: 800 })
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      큐 게임하기
    </Tooltip>
  )
  return (
    <div id="study">
      {isDesktopOrLaptop &&
        <div>
          <h1 style={{marginTop:"80px", marginBottom:"50px"}}>Queue</h1>
          <Container style={{ width: "50%", textAlign: "left" }}>
            <div id="fixed">
              <OverlayTrigger
                placement="top"
                overlay={renderTooltip}
              >
                <button id="gamebutton" style={{width:"100px", height:"100px", padding:"0", border:"solid 2px #6562CF", borderRadius:"50px"}}>
                  <Link to={{
                    pathname: "/game/ds/2"
                  }} >
                    <img src={queuegameimage} id="gameimage" style={{margin:"0", width:"100%", height:"100%", border:"solid 2px #6562CF", borderRadius:"50px"}} alt=""/>
                  </Link>
                </button>
              </OverlayTrigger>
            </div>
            <div style={{ width: "100%", textAlign: "center" }}>
              <img src={queue_thumnail} alt="" style={{ width: "60%" }} />
            </div>
            <h2>큐란?</h2>
            <p>
              큐는 배열에 항목이 들어온 순서대로 접근 가능한 자료구조에요. 먼저 들어온 항목이 먼저 나가는 구조 (선입선출; First In, First Out)
              를 가지고 있어요.
            </p>
            <p>
              은행 업무를 보기 위해 기다리는 것이나 롤러코스터를 타려고 줄을 서는 것을 생각해보면 좀 더 쉽게 이해할 수 있을 거예요!
              롤러코스터를 타기 위해 줄을 먼저 선 사람이 먼저 탈 수 있겠죠? 큐의 동작과 아주 흡사해요!
            </p>
            <hr />
            <div style={{ width: "100%", textAlign: "center" }}>
              <img src={queue1} alt="" style={{ width: "60%" }} />
            </div>
            <h2>큐의 동작</h2>
            <p>
              큐의 동작은 아래와 같이 이루어져요.
            </p>
            <p style={{ fontWeight: "bold" }}>
              삽입 :
            </p>
            <p>
              rear는 가장 최근에 입력된 값을 가리켜요.
            </p>
            <p>
              큐에 새로운 항목을 삽입하기 위해서는 rear를 한 칸 앞으로 이동한 후 그 위치에 삽입해줘요.
            </p>
            <p style={{ fontWeight: "bold" }}>
              삭제 :
            </p>
            <p>
              front는 가장 먼저 삭제될 노드를 가리켜요.
            </p>
            <p>
              큐에 있는 항목을 제거할 때는 front 위치에서 항목을 제거한 후 한 칸 앞으로 이동해요.
            </p>
            <hr />
            <div style={{ width: "100%", textAlign: "center" }}>
              <img src={queue3} alt="" />
            </div>
            <h2>실생활 예</h2>
            <p>
              큐의 또 다른 예시는 뭐가 있을까요?
            </p>
            <p>
              대부분 줄을 서는 행위는 큐의 예시라고 볼 수 있을 것 같아요.
            </p>
            <p>
              톨게이트를 통과하는 차들,
              티켓을 사기위해 줄을 서서 기다리는 사람들, 편의점 물품을 진열할 때 앞에서 부터 채워넣는 행위들이 모두 실생활에서 볼 수 있는
              큐의 예시랍니다.
            </p>
          </Container>
        </div>
      }
      {isTabletOrMobile &&
        <div>
          <h1 style={{marginTop:"30px", marginBottom:"30px"}}>Queue</h1>
          <Container style={{ width: "90%", textAlign: "left" }}>
            <div style={{ width: "100%", textAlign: "center" }}>
              <img src={queue_thumnail} alt="" style={{ width: "60%" }} />
            </div>
            <h2>큐란?</h2>
            <p>
              큐는 배열에 항목이 들어온 순서대로 접근 가능한 자료구조에요. 먼저 들어온 항목이 먼저 나가는 구조 (선입선출; first in, first out)
              를 가지고 있어요.
            </p>
            <p>
              은행 업무를 보기 위해 기다리는 것이나 롤러코스터를 타려고 줄을 서는 것을 생각해보면 좀 더 쉽게 이해할 수 있을 거예요!
              롤러코스터를 타기 위해 줄을 먼저 선 사람이 먼저 탈 수 있겠죠? 큐의 동작과 아주 흡사해요!
            </p>
            <hr />
            <div style={{ width: "100%", textAlign: "center" }}>
              <img src={queue1} alt="" style={{ width: "60%" }} />
            </div>
            <h2>큐의 동작</h2>
            <p>
              큐의 동작은 아래와 같이 이루어져요.
            </p>
            <p style={{ fontWeight: "bold" }}>
              삽입 :
            </p>
            <p>
              rear는 가장 최근에 입력된 값을 가리켜요.
            </p>
            <p>
              큐에 새로운 항목을 삽입하기 위해서는 rear를 한 칸 앞으로 이동한 후 그 위치에 삽입해줘요.
            </p>
            <p style={{ fontWeight: "bold" }}>
              삭제 :
            </p>
            <p>
              front는 가장 먼저 삭제될 노드를 가리켜요.
            </p>
            <p>
              큐에 있는 항목을 제거할 때는 front 위치에서 항목을 제거한 후 한 칸 앞으로 이동해요.
            </p>
            <hr />
            <div style={{ width: "100%", textAlign: "center" }}>
              <img src={queue3} alt="" />
            </div>
            <h2>실생활 예</h2>
            <p>
              큐의 또 다른 예시는 뭐가 있을까요?
            </p>
            <p>
              대부분 줄을 서는 행위는 큐의 예시라고 볼 수 있을 것 같아요.
            </p>
            <p>
              톨게이트를 통과하는 차들,
              티켓을 사기 위해 줄을 서서 기다리는 사람들, 편의점 물품을 진열할 때 앞에서부터 채워 넣는 행위들이 모두 실생활에서 볼 수 있는
              큐의 예시랍니다.
            </p>
          </Container>
        </div>
      }
    </div>
  )
}

export default Queue