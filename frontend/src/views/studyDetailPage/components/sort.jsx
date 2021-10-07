import { Container, OverlayTrigger, Tooltip } from 'react-bootstrap'
import '../../../styles/studyCard.css';
import { useMediaQuery } from 'react-responsive'
import {Link} from 'react-router-dom';

import sort_thumnail from '../../../assets/study/sort_thumnail.jpg'
import bubble_sort from '../../../assets/study/bubble_sort.PNG'
import insertion_sort from '../../../assets/study/insertion_sort.PNG'
import selection_sort from '../../../assets/study/selection_sort.PNG'

import sortgameimage from '../../../assets/game/sort.png'

import '../../../styles/studyCard.css';


function Sort() {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 800 })
  const isTabletOrMobile = useMediaQuery({ maxWidth: 800 })
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      정렬 게임하기
    </Tooltip>
  )
  return (
    <div id="study">
      {isDesktopOrLaptop &&
        <div>
          <h1 style={{marginTop:"80px", marginBottom:"50px"}}>Sort</h1>
          <Container style={{ width: "50%", textAlign: "left" }}>
            <div id="fixed">
              <OverlayTrigger
                placement="top"
                overlay={renderTooltip}
              >
                <button id="gamebutton" style={{width:"100px", height:"100px", padding:"0", border:"solid 2px #6562CF", borderRadius:"50px"}}>
                  <Link to={{
                    pathname: "/game/algo/1"
                  }} >
                    <img src={sortgameimage} id="gameimage" style={{margin:"0", width:"100%", height:"100%", border:"solid 2px #6562CF", borderRadius:"50px"}} alt=""/>
                  </Link>
                </button>
              </OverlayTrigger>
            </div>
            <div style={{ width: "100%", textAlign: "center" }}>
              <img src={sort_thumnail} alt="" style={{ width: "80%" }} />
            </div>
            <h2>정렬이란?</h2>
            <p>
              알고리즘에서 정렬이란, 말 그대로 어떤 항목들로 이루어진 그룹을 조건에 맞춰 다시 배치하는 것이에요.
            </p>
            <p>
              예를 들어, 무작위로 숫자로 이루어진 그룹이 있다고 하면 작은 순서에서 큰 순서로, 혹은 큰 순서에서 작은 순서로 정렬시킬 수 있어요.
            </p>
            <p>
              무작위로 나열된 단어들도, 정렬을 통해 사전 순으로 볼 수 있게끔 만들 수도 있고요.
            </p>
            <p>
              혹시 여러분은 정렬에도 여러 가지 방식이 있다는 것을 아세요?
            </p>
            <p>
              숫자를 오름차순으로 정렬시키는 것도 여러 가지 방식으로 할 수 있다는 거예요.
            </p>
            <p>
              아직 잘 감이 안 잡히는 분들을 위해 제가 가장 대표적이고 간단한 몇 가지 정렬에 관해 설명해 드릴게요!
            </p>
            <hr />
            <h2 style={{ marginTop: "50px" }}>정렬의 종류</h2>
            <div style={{ width: "100%", textAlign: "center" }}>
              <img src={bubble_sort} alt="" style={{ width: "50%" }} />
            </div>
            <p style={{ fontWeight: "bold" }}>
              1. 버블 정렬
            </p>
            <p>
              버블 정렬(bubble sort)은 인접한 두 항목을 비교하여 정렬하는 방식이에요.
            </p>
            <p>
              항목이 마치 수면 위로 거품처럼 올라오는 듯한 모습을 보이기 때문에 버블 정렬이라는 이름이 붙었다고 해요.
            </p>
            <p>
              버블 정렬이 어떻게 이루어지는지 한가지 예를 들어 설명해 볼까요?
            </p>
            <p>
              위 그림처럼 6개의 숫자 그룹이 주어진다고 생각해 볼게요. 그리고 우리는 작은 수부터 큰 수까지 오름차순으로 정렬하려고 해요.
            </p>
            <p>
              먼저, 첫 번째 값과 두 번째 값을 비교하여, 더 작은 값이 앞쪽으로 오도록 위치를 변경해요. 위 그림처럼 11과 3을 비교하면 3이 더 작은 값이니 위치가 변경되죠.
            </p>
            <p>
              그다음으로 두 번째 값과 세 번째값을 비교하여 작은 값이 앞쪽으로 오도록 만들어요. 현재 두 번째 값인 11과 세 번째 값인 28을 비교하면, 이미 11이 더 작으므로 변화가 일어나지 않아요.
            </p>
            <p>
              이런 식으로 계속 반복하다 보면 마지막 값은 그룹에서 가장 큰 값이 위치하게 될 거예요.
            </p>
            <p>
              하지만, 아직 앞쪽은 정렬이 되지 않았기 때문에 맨 마지막 값(가장 큰 값)을 제외하고 다시 버블 정렬을 반복해서 해줘야 해요.
            </p>
            <p>
              그렇게 총 5번의 버블 정렬을 마치고 나면, 오름차순으로 정렬된 결과를 확인할 수 있을 거예요.
            </p>
            <div style={{ width: "100%", textAlign: "center" }}>
              <img src={selection_sort} alt="" style={{ width: "50%" }} />
            </div>
            <p style={{ fontWeight: "bold" }}>
              2. 선택 정렬
            </p>
            <p>
              선택 정렬(selection sort)은 가장 작거나 큰 값을 찾아 위치를 바꾸는 방식으로 진행돼요.
            </p>
            <p>
              오름차순으로 정렬하는 것을 예로 한번 들어볼게요.
            </p>
            <p>
              먼저 그룹에서 가장 작은 값을 찾아요! 그 값과 가장 앞에 있는 값의 위치를 변경하는 거예요. 그럼 이젠 가장 작은 값이 제일 앞으로 오겠죠?
            </p>
            <p>
              두 번째론 그다음 큰 작은 값을 찾아 두 번째로 위치한 값과 위치를 바꾸는 거예요. 그룹에서 두 번째 작은 값이 두 번째에 위치하게 되는 거죠
            </p>
            <p>
              이런 식으로 바꾸다 보면, 위 그림과 같은 과정을 통해 최종적으로 오름차순으로 정렬된 결과를 얻을 수 있어요. 어렵지 않죠?
            </p>
            <div style={{ width: "100%", textAlign: "center" }}>
              <img src={insertion_sort} alt="" style={{ width: "50%" }} />
            </div>
            <p style={{ fontWeight: "bold" }}>
              3. 삽입 정렬
            </p>
            <p>
              삽입 정렬(insertion sort)은 그룹 맨 처음 정렬된 부분에, 정렬되지 않은 다음 항목을 반복적으로 삽입하는 정렬이에요.
            </p>
            <p>
              손에 여러 장의 숫자 카드가 있다고 생각해 보세요.
            </p>
            <p>
              카드를 크기순으로 정렬한다고 했을 때, 카드를 한 장 뽑아 기존 카드 사이의 올바른 자리에 삽입해가며 정렬하는 거에요.
            </p>
            <p>
              즉 삽입 정렬을 다시 풀어서 얘기해보면, 모든 항목을 앞에서부터 차례대로 이미 정렬된 부분과 비교하여, 자신의 위치를 찾아 삽입하는 정렬이에요.
            </p>
            <p>
              위 그림을 예로 들어볼게요.
            </p>
            <p>
              11, 3, 28, 43, 9, 4로 주어진 그룹이 있을 때, 오름차순으로 정렬하기 위해 3부터 앞에 값과 비교하는 거에요. 11은 3보다 크기 때문에 자리가 변경되죠.
            </p>
            <p>
              다음으로 28을 앞의 값들과 비교하는 거에요. 11, 3 모두 28보다 작으므로 변화가 일어나지 않아요. 그다음 순서인 43도 마찬가지예요.
            </p>
            <p>
              그다음으로 9와 앞의 값들을 비교해요. 4는 43, 28, 11보다 작기 때문에 위치 변경이 일어나요. 하지만 3보다는 크기 때문에 3과 11 사이에 위치하게 되죠.
            </p>
            <p>
              이런 방식으로 그룹 끝까지 비교를 하게 되면 가장 작은 값부터 순서대로 정렬돼요.
            </p>
            <p>
              버블정렬, 선택정렬, 삽입정렬을 알려드렸으니, 각각 어떤 차이점이 있는지 직접 정리해보세요! 공부하는 데 큰 도움이 될 거예요
            </p>
          </Container>
        </div>
      }
      {isTabletOrMobile &&
        <div>
          <h1 style={{marginTop:"30px", marginBottom:"30px"}}>Sort</h1>
          <Container style={{ width: "90%", textAlign: "left" }}>
            <div style={{ width: "100%", textAlign: "center" }}>
              <img src={sort_thumnail} alt="" style={{ width: "80%" }} />
            </div>
            <h2>정렬이란?</h2>
            <p>
              알고리즘에서 정렬이란, 말 그대로 어떤 항목들로 이루어진 그룹을 조건에 맞춰 다시 배치하는 것이에요.
            </p>
            <p>
              예를 들어, 무작위로 숫자로 이루어진 그룹이 있다고 하면 작은 순서에서 큰 순서로, 혹은 큰 순서에서 작은 순서로 정렬시킬 수 있어요.
            </p>
            <p>
              무작위로 나열된 단어들도, 정렬을 통해 사전 순으로 볼 수 있게끔 만들 수도 있고요.
            </p>
            <p>
              혹시 여러분은 정렬에도 여러 가지 방식이 있다는 것을 아세요?
            </p>
            <p>
              숫자를 오름차순으로 정렬시키는 것도 여러 가지 방식으로 할 수 있다는 거예요.
            </p>
            <p>
              아직 잘 감이 안 잡히는 분들을 위해 제가 가장 대표적이고 간단한 몇 가지 정렬에 관해 설명해 드릴게요!
            </p>
            <hr />
            <h2 style={{ marginTop: "50px" }}>정렬의 종류</h2>
            <div style={{ width: "100%", textAlign: "center" }}>
              <img src={bubble_sort} alt="" style={{ width: "50%" }} />
            </div>
            <p style={{ fontWeight: "bold" }}>
              1. 버블 정렬
            </p>
            <p>
              버블 정렬(bubble sort)은 인접한 두 항목을 비교하여 정렬하는 방식이에요.
            </p>
            <p>
              항목이 마치 수면 위로 거품처럼 올라오는 듯한 모습을 보이기 때문에 버블 정렬이라는 이름이 붙었다고 해요.
            </p>
            <p>
              버블 정렬이 어떻게 이루어지는지 한가지 예를 들어 설명해 볼까요?
            </p>
            <p>
              위 그림처럼 6개의 숫자 그룹이 주어진다고 생각해 볼게요. 그리고 우리는 작은 수부터 큰 수까지 오름차순으로 정렬하려고 해요.
            </p>
            <p>
              먼저, 첫 번째 값과 두 번째 값을 비교하여, 더 작은 값이 앞쪽으로 오도록 위치를 변경해요. 위 그림처럼 11과 3을 비교하면 3이 더 작은 값이니 위치가 변경되죠.
            </p>
            <p>
              그다음으로 두 번째 값과 세 번째값을 비교하여 작은 값이 앞쪽으로 오도록 만들어요. 현재 두 번째 값인 11과 세 번째 값인 28을 비교하면, 이미 11이 더 작으므로 변화가 일어나지 않아요.
            </p>
            <p>
              이런 식으로 계속 반복하다 보면 마지막 값은 그룹에서 가장 큰 값이 위치하게 될 거예요.
            </p>
            <p>
              하지만, 아직 앞쪽은 정렬이 되지 않았기 때문에 맨 마지막 값(가장 큰 값)을 제외하고 다시 버블 정렬을 반복해서 해줘야 해요.
            </p>
            <p>
              그렇게 총 5번의 버블 정렬을 마치고 나면, 오름차순으로 정렬된 결과를 확인할 수 있을 거예요.
            </p>
            <div style={{ width: "100%", textAlign: "center" }}>
              <img src={selection_sort} alt="" style={{ width: "50%" }} />
            </div>
            <p style={{ fontWeight: "bold" }}>
              2. 선택 정렬
            </p>
            <p>
              선택 정렬(selection sort)은 가장 작거나 큰 값을 찾아 위치를 바꾸는 방식으로 진행돼요.
            </p>
            <p>
              오름차순으로 정렬하는 것을 예로 한번 들어볼게요.
            </p>
            <p>
              먼저 그룹에서 가장 작은 값을 찾아요! 그 값과 가장 앞에 있는 값의 위치를 변경하는 거예요. 그럼 이젠 가장 작은 값이 제일 앞으로 오겠죠?
            </p>
            <p>
              두 번째론 그다음 큰 작은 값을 찾아 두 번째로 위치한 값과 위치를 바꾸는 거예요. 그룹에서 두 번째 작은 값이 두 번째에 위치하게 되는 거죠
            </p>
            <p>
              이런 식으로 바꾸다 보면, 위 그림과 같은 과정을 통해 최종적으로 오름차순으로 정렬된 결과를 얻을 수 있어요. 어렵지 않죠?
            </p>
            <div style={{ width: "100%", textAlign: "center" }}>
              <img src={insertion_sort} alt="" style={{ width: "50%" }} />
            </div>
            <p style={{ fontWeight: "bold" }}>
              3. 삽입 정렬
            </p>
            <p>
              삽입 정렬(insertion sort)은 그룹 맨 처음 정렬된 부분에, 정렬되지 않은 다음 항목을 반복적으로 삽입하는 정렬이에요.
            </p>
            <p>
              손에 여러 장의 숫자 카드가 있다고 생각해 보세요.
            </p>
            <p>
              카드를 크기순으로 정렬한다고 했을 때, 카드를 한 장 뽑아 기존 카드 사이의 올바른 자리에 삽입해가며 정렬하는 거에요.
            </p>
            <p>
              즉 삽입 정렬을 다시 풀어서 얘기해보면, 모든 항목을 앞에서부터 차례대로 이미 정렬된 부분과 비교하여, 자신의 위치를 찾아 삽입하는 정렬이에요.
            </p>
            <p>
              위 그림을 예로 들어볼게요.
            </p>
            <p>
              11, 3, 28, 43, 9, 4로 주어진 그룹이 있을 때, 오름차순으로 정렬하기 위해 3부터 앞에 값과 비교하는 거에요. 11은 3보다 크기 때문에 자리가 변경되죠.
            </p>
            <p>
              다음으로 28을 앞의 값들과 비교하는 거에요. 11, 3 모두 28보다 작으므로 변화가 일어나지 않아요. 그다음 순서인 43도 마찬가지예요.
            </p>
            <p>
              그다음으로 9와 앞의 값들을 비교해요. 4는 43, 28, 11보다 작기 때문에 위치 변경이 일어나요. 하지만 3보다는 크기 때문에 3과 11 사이에 위치하게 되죠.
            </p>
            <p>
              이런 방식으로 그룹 끝까지 비교를 하게 되면 가장 작은 값부터 순서대로 정렬돼요.
            </p>
            <p>
              버블정렬, 선택정렬, 삽입정렬을 알려드렸으니, 각각 어떤 차이점이 있는지 직접 정리해보세요! 공부하는 데 큰 도움이 될 거예요
            </p>
          </Container>

        </div>
      }

    </div>
  )
}

export default Sort