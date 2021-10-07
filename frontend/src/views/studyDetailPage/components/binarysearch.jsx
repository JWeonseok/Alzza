import { Container, OverlayTrigger, Tooltip } from 'react-bootstrap'
import '../../../styles/studyCard.css';
import { useMediaQuery } from 'react-responsive'
import {Link} from 'react-router-dom';

import binarysearch1 from '../../../assets/study/binarysearch1.png'
import binarysearch2 from '../../../assets/study/binarysearch2.jpg'
import binarysearch3 from '../../../assets/study/binarysearch3.PNG'
import binarysearch4 from '../../../assets/study/binarysearch4.PNG'

import midgameimage from '../../../assets/game/mid.png'

import '../../../styles/studyCard.css';


function BinarySearch(props) {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 800 })
  const isTabletOrMobile = useMediaQuery({ maxWidth: 800 })
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      이분탐색 게임하기
    </Tooltip>
  )
  
  return (
    <div id="study">
      {isDesktopOrLaptop &&
        <div>
          <h1 style={{marginTop:"80px", marginBottom:"50px"}}>Binary Search</h1>
          <Container style={{ width: "50%", textAlign: "left" }}>
            <div id="fixed">
              <OverlayTrigger
                placement="top"
                overlay={renderTooltip}
              >
                <button id="gamebutton" style={{width:"100px", height:"100px", padding:"0", border:"solid 2px #6562CF", borderRadius:"50px"}}>
                  <Link to={{
                    pathname: "/game/algo/2"
                  }} >
                    <img src={midgameimage} id="gameimage" style={{margin:"0", width:"100%", height:"100%", border:"solid 2px #6562CF", borderRadius:"50px"}} alt=""/>
                  </Link>
                </button>
              </OverlayTrigger>
            </div>
            <div style={{ width: "100%", textAlign: "center" }}>
              <img src={binarysearch2} alt="" style={{ width: "80%" }} />
            </div>
            <h2>이분 탐색이란?</h2>
            <p>
              이분 탐색은 정렬된 배열 내에서 찾고자 하는 값의 위치를 찾는 탐색이에요.
            </p>
            <p>
              이진 탐색, 이진 검색 다 같은 말이죠.
            </p>
            <p>
              이분 탐색은 알고리즘의 각 단계에서 찾고자 하는 값과 배열 중간 요소를 비교해요.
            </p>
            <p>
              이때의 중간 요소란, 배열의 처음 위치와 마지막 위치에 대한 중간 위치에 있는 값을 의미해요.
            </p>
            <p>
              만약 찾고자 하는 값과 중간 요소가 일치한다면, 그 위치를 반환하게 돼요.
            </p>
            <p>
              그렇다면 찾는 값이 중간 요소보다 작거나 클 때는 어떻게 될까요?
            </p>
            <p>
              찾는 값이 중간 요소보다 작다면 중간 요소를 기준으로 왼쪽 배열에서 검색 과정을 반복해요.
            </p>
            <p>
              반대로 크다면 중간 요소를 기준으로 오른쪽 배열에서 검색 과정을 반복하죠.
            </p>
            <p>
              어때요, 어렵지 않죠?
            </p>
            <hr />
            <div style={{ width: "100%", textAlign: "center" }}>
              <img src={binarysearch1} alt="" style={{ width: "70%" }} />
            </div>
            <h2>장점과 단점</h2>
            <p>
              이분 탐색에 대해 이해가 되셨나요? 그렇다면 이분탐색의 장단점은 무엇이 있는지 알아볼까요?
            </p>
            <div style={{ width: "100%", textAlign: "center" }}>
              <img src={binarysearch4} alt="" style={{ width: "50%" }} />
            </div>
            <p style={{ fontWeight: "bold" }}>
              장점
            </p>

            <p>
              이분 탐색의 장점은 배열의 크기가 클수록, 즉 자료가 많을수록 효율적이라는 거에요.
            </p>
            <p>
              배열에 값이 5개가 있다고 생각해 보세요.
            </p>
            <p>
              어떤 값을 찾으려고 할 때, 앞에서부터 하나씩 비교해 가며 원하는 값을 찾는 것과 이분 탐색을 통해 찾는 것은 크게 시간상으로 차이가 없을 거예요.
            </p>
            <p>
              하지만 배열에 값이 1,000개가 있다면? 훨씬 탐색 시간이 줄어들 거에요!
            </p>
            <img src={binarysearch3} alt="" />
            <p style={{ fontWeight: "bold" }}>
              단점
            </p>
            <p>
              반대로 단점은 무엇이 있을까요?
            </p>
            <p>
              이분 탐색은 배열에 들어가는 값들이 크기순으로 정렬이 되어 있어야 한다는 단점이 있어요.
            </p>
            <p>
              이분 탐색 자체가 배열의 중간 요소 값의 크기와 찾는 값의 크기를 비교하는 탐색 방법이기 때문이에요.
            </p>
            <p>
              이분 탐색을 하기 위해서는 꼭 먼저 정렬을 해줘야 한다는 것. 잊지 마세요!
            </p>
          </Container>
        </div>
      }
      {isTabletOrMobile &&
        <div>
          <h1 style={{marginTop:"30px", marginBottom:"30px"}}>Binary Search</h1>
          <Container style={{ width: "90%", textAlign: "left" }}>
            <div style={{ width: "100%", textAlign: "center" }}>
              <img src={binarysearch2} alt="" style={{ width: "80%" }} />
            </div>
            <h2>이분 탐색이란?</h2>
            <p>
              이분 탐색은 정렬된 배열 내에서 찾고자 하는 값의 위치를 찾는 탐색이에요.
            </p>
            <p>
              이진 탐색, 이진 검색 다 같은 말이죠.
            </p>
            <p>
              이분 탐색은 알고리즘의 각 단계에서 찾고자 하는 값과 배열 중간 요소를 비교해요.
            </p>
            <p>
              이때의 중간 요소란, 배열의 처음 위치와 마지막 위치에 대한 중간 위치에 있는 값을 의미해요.
            </p>
            <p>
              만약 찾고자 하는 값과 중간 요소가 일치한다면, 그 위치를 반환하게 돼요.
            </p>
            <p>
              그렇다면 찾는 값이 중간 요소보다 작거나 클 때는 어떻게 될까요?
            </p>
            <p>
              찾는 값이 중간 요소보다 작다면 중간 요소를 기준으로 왼쪽 배열에서 검색 과정을 반복해요.
            </p>
            <p>
              반대로 크다면 중간 요소를 기준으로 오른쪽 배열에서 검색 과정을 반복하죠.
            </p>
            <p>
              어때요, 어렵지 않죠?
            </p>
            <hr />
            <div style={{ width: "100%", textAlign: "center" }}>
              <img src={binarysearch1} alt="" style={{ width: "70%" }} />
            </div>
            <h2>장점과 단점</h2>
            <p>
              이분 탐색에 대해 이해가 되셨나요? 그렇다면 이분탐색의 장단점은 무엇이 있는지 알아볼까요?
            </p>
            <div style={{ width: "100%", textAlign: "center" }}>
              <img src={binarysearch4} alt="" style={{ width: "50%" }} />
            </div>
            <p style={{ fontWeight: "bold" }}>
              장점
            </p>

            <p>
              이분 탐색의 장점은 배열의 크기가 클수록, 즉 자료가 많을수록 효율적이라는 거에요.
            </p>
            <p>
              배열에 값이 5개가 있다고 생각해 보세요.
            </p>
            <p>
              어떤 값을 찾으려고 할 때, 앞에서부터 하나씩 비교해 가며 원하는 값을 찾는 것과 이분 탐색을 통해 찾는 것은 크게 시간상으로 차이가 없을 거예요.
            </p>
            <p>
              하지만 배열에 값이 1,000개가 있다면? 훨씬 탐색 시간이 줄어들 거에요!
            </p>
            <img src={binarysearch3} alt="" />
            <p style={{ fontWeight: "bold" }}>
              단점
            </p>
            <p>
              반대로 단점은 무엇이 있을까요?
            </p>
            <p>
              이분 탐색은 배열에 들어가는 값들이 크기순으로 정렬이 되어 있어야 한다는 단점이 있어요.
            </p>
            <p>
              이분 탐색 자체가 배열의 중간 요소 값의 크기와 찾는 값의 크기를 비교하는 탐색 방법이기 때문이에요.
            </p>
            <p>
              이분 탐색을 하기 위해서는 꼭 먼저 정렬을 해줘야 한다는 것. 잊지 마세요!
            </p>
          </Container>
        </div>
      }

    </div>
  )
}

export default BinarySearch