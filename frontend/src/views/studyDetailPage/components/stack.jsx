import { Container, OverlayTrigger, Tooltip } from 'react-bootstrap'
import '../../../styles/studyCard.css';
import { useMediaQuery } from 'react-responsive'
import {Link} from 'react-router-dom';

import stack_thumnail from '../../../assets/study/stack_thumnail.jpg'
import stack2 from '../../../assets/study/stack2.PNG'
import stack3 from '../../../assets/study/stack3.jpg'

import stackgameimage from '../../../assets/game/stack.png'

import '../../../styles/studyCard.css';


function Stack() {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 800 })
  const isTabletOrMobile = useMediaQuery({ maxWidth: 800 })

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      스택 게임하기
    </Tooltip>
  )

  return (
    <div id="study">
      {isDesktopOrLaptop &&
        <div>

          <h1 style={{marginTop:"80px", marginBottom:"50px"}}>Stack</h1>
          <Container style={{ width: "50%", textAlign: "left" }}>
            {/* 링크 나중에 걸기. 게임 이미지로. 호버하면 게임 페이지로 이동 */}
            <div id="fixed">
              <OverlayTrigger
                placement="top"
                overlay={renderTooltip}
              >
                <button id="gamebutton" style={{width:"100px", height:"100px", padding:"0", border:"solid 2px #6562CF", borderRadius:"50px"}}>
                  <Link to={{
                    pathname: "/game/ds/1"
                  }} >
                    <img src={stackgameimage} id="gameimage" style={{margin:"0", width:"100%", height:"100%", border:"solid 2px #6562CF", borderRadius:"50px"}} alt=""/>
                  </Link>
                </button>
              </OverlayTrigger>
            </div>
            <div style={{ width: "100%", textAlign: "center" }}>
              <img src={stack_thumnail} alt="" style={{ width: "50%" }} />
            </div>
            <h2>스택이란?</h2>
            <p>
              스택은 배열의 끝에서만 데이터에 접근할 수 있는 자료 구조에요.
            </p>
            <p>
              먼저 들어온 항목이 나중에 나가는 구조 (후입선출; Last In, First Out)을 가지고 있어요. 즉, 항목의 삽입과 삭제가 한쪽 끝에서만 이루어지죠.
            </p>
            <p>
              책상 위에 쌓여있는 책이나 싱크대에 쌓여있는 접시를 생각해 보면 이해하기 쉬울 거예요!
            </p>
            <p>
              책이 쌓여있으면 아래에 있는 책을 꺼내기 위해 위에 있는 것을 먼저 꺼내야 하겠죠?
            </p>
            <p>
              스택도 먼저 들어온 항목을 꺼내기 위해서는 나중에 들어온 항목부터 꺼내줘야 해요
            </p>
            <hr />
            {/* <img src={stack1} alt=""/> */}
            <div style={{ width: "100%", textAlign: "center" }}>
              <img src={stack2} alt="" style={{ width: "70%" }} />
            </div>
            <h2>스택의 동작</h2>
            <p>
              스택의 동작은 아래와 같이 이루어져요. 위 그림을 함께 참고하며 생각해 보세요.
            </p>
            <p style={{ fontWeight: "bold" }}>
              삽입 :
            </p>
            <p>
              top은 가장 최근에 들어온 항목의 위치. 즉, 현재 스택 맨 끝에 있는 값의 위치를 의미해요.
            </p>
            <p>
              스택에 새로운 값을 삽입하기 위해서는 top을 1만큼 증가시키고 그 위치에 값을 넣어줘요
            </p>
            <p style={{ fontWeight: "bold" }}>
              삭제 :
            </p>
            <p>
              스택에 있는 항목을 삭제할 때는 top의 위치에서 항목을 삭제한 후 top의 위치를 1만큼 감소시켜줘요.
            </p>
            <hr />
            <div style={{ width: "100%", textAlign: "center" }}>
              <img src={stack3} alt="" />
            </div>
            <h2>실생활 예</h2>
            <p>
              위에서 설명한 책, 접시 같은 상황 이외에도 다양한 상황을 예로 들어볼 수 있을 거예요.
            </p>
            <p>
              혹시 프링글X 라는 과자를 드셔보셨나요?
              통 가장 아래에 있는 과자를 먹기 위해서는 위에서부터 하나씩 꺼내 먹을 수밖에 없어요. 가장 먼저 들어간 과자를 먹기 위해서는
              뒤에 들어온 과자부터 먹어야 하는 거죠.
            </p>
            <p>
              어때요. 이제 스택에 대해 감이 좀 잡히시나요?
              주변에 눈을 돌려 스택과 같은 구조가 무엇이 있는지 여러분이 직접 한번 찾아보세요!
            </p>
          </Container>
        </div>
      }
      {isTabletOrMobile &&
        <div>
          <h1 style={{marginTop:"30px", marginBottom:"30px"}}>Stack</h1>
          <Container style={{ width: "90%", textAlign: "left" }}>
            <div style={{ width: "100%", textAlign: "center" }}>
              <img src={stack_thumnail} alt="" style={{ width: "50%" }} />
            </div>
            <h2>스택이란?</h2>
            <p>
              스택은 배열의 끝에서만 데이터에 접근할 수 있는 자료 구조에요.
            </p>
            <p>
              먼저 들어온 항목이 나중에 나가는 구조 (후입선출; last in, first out)을 가지고 있어요. 즉, 항목의 삽입과 삭제가 한쪽 끝에서만 이루어지죠.
            </p>
            <p>
              책상 위에 쌓여있는 책이나 싱크대에 쌓여있는 접시를 생각해 보면 이해하기 쉬울 거예요!
            </p>
            <p>
              책이 쌓여있으면 아래에 있는 책을 꺼내기 위해 위에 있는 것을 먼저 꺼내야 하겠죠?
            </p>
            <p>
              스택도 먼저 들어온 항목을 꺼내기 위해서는 나중에 들어온 항목부터 꺼내줘야 해요
            </p>
            <hr />
            <div style={{ width: "100%", textAlign: "center" }}>
              <img src={stack2} alt="" style={{ width: "70%" }} />
            </div>
            <h2>스택의 동작</h2>
            <p>
              스택의 동작은 아래와 같이 이루어져요. 위 그림을 함께 참고하며 생각해 보세요.
            </p>
            <p style={{ fontWeight: "bold" }}>
              삽입 :
            </p>
            <p>
              top은 가장 최근에 들어온 항목의 위치. 즉, 현재 스택 맨 끝에 있는 값의 위치를 의미해요.
            </p>
            <p>
              스택에 새로운 값을 삽입하기 위해서는 top을 1만큼 증가시키고 그 위치에 값을 넣어줘요
            </p>
            <p style={{ fontWeight: "bold" }}>
              삭제 :
            </p>
            <p>
              스택에 있는 항목을 삭제할 때는 top의 위치에서 항목을 삭제한 후 top의 위치를 1만큼 감소시켜줘요.
            </p>
            <hr />
            <div style={{ width: "100%", textAlign: "center" }}>
              <img src={stack3} alt="" />
            </div>
            <h2>실생활 예</h2>
            <p>
              위에서 설명한 책, 접시 같은 상황 이외에도 다양한 상황을 예로 들어볼 수 있을거에요.
            </p>
            <p>
              혹시 프링글X 라는 과자를 드셔보셨나요?
              통 가장 아래에 있는 과자를 먹기 위해서는 위에서부터 하나씩 꺼내 먹을 수밖에 없어요. 가장 먼저 들어간 과자를 먹기 위해서는
              뒤에 들어온 과자부터 먹어야 하는 거죠.
            </p>
            <p>
              어때요. 이제 스택에 대해 감이 좀 잡히시나요?
              주변에 눈을 돌려 스택과 같은 구조가 무엇이 있는지 여러분이 직접 한번 찾아보세요!
            </p>
          </Container>
        </div>
      }
    </div>
  )
}

export default Stack