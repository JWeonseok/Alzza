import { Container} from 'react-bootstrap'
import '../../../styles/studyCard.css';
import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-router-dom'

import graphtraversal_thumnail from '../../../assets/study/graphTraversal_thumnail.png'
import graphtraversal1 from '../../../assets/study/graphtraversal1.jpg'
import DFS from '../../../assets/study/DFS.gif'
import BFS from '../../../assets/study/BFS.gif'

function GraphTraversal() {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 800 })
  const isTabletOrMobile = useMediaQuery({ maxWidth: 800 })
  return (
    <div id="study">
      {isDesktopOrLaptop &&
        <div>
          <h1 style={{marginTop:"80px", marginBottom:"50px"}}>Graph Traversals</h1>
          <Container style={{ width: "50%", textAlign: "left" }}>
            <img src={graphtraversal_thumnail} alt="" />
            <Link to={"/study/ds/3"}>그래프란?</Link>
            <br />
            <Link to={"/study/ds/4"}>트리란?</Link>
            <h2>그래프, 트리 탐색(BFS,DFS)</h2>
            <p>
              무방향 그래프 혹은 트리를 탐색하는 방법은 대표적으로 2가지가 있어요.
            </p>
            <p>
              DFS와 BFS가 바로 그것인데요. 각각 무엇을 의미하는지, 어떤 방식으로 탐색이 진행되는지 차근차근 알아볼까요?
            </p>
            <hr />
            <div style={{ width: "100%", textAlign: "center" }}>
              <img src={DFS} alt="" style={{ width: "40%" }} />
            </div>
            <h2>DFS란</h2>
            <p>
              DFS(Depth First Search)는 그래프와 트리에서 깊이를 우선으로 탐색하는 방법이에요.
            </p>
            <p>
              위의 그림을 참조하여 설명해 볼까요?
            </p>
            <p>
              10이란 값을 먼저 탐색했고, 그다음으로는 6 - 3을 탐색하는 것을 보니 한가지 방향으로 먼저 탐색이 일어나네요.
            </p>
            <p>
              더 이상 깊이가 존재하지 않는다면 반대 방향으로 탐색이 일어나고요.
            </p>
            <p>
              이처럼 한 쪽 끝까지 우선 탐색하는 것이 DFS에요.
            </p>
            <hr />
            <div style={{ width: "100%", textAlign: "center" }}>
              <img src={BFS} alt="" style={{ width: "40%" }} />
            </div>
            <h2>BFS란</h2>
            <p>
              BFS(Breadth First Search)는 DFS와는 반대로 너비를 우선으로 탐색하는 방법이에요.
            </p>
            <p>
              더 깊은 위치를 탐색하기 이전에, 같은 깊이에 있는 위치를 탐색하는 것이죠.
            </p>
            <p>
              위 그림을 보면 한 번에 이해할 수 있을 거예요.
            </p>
            <p>
              DFS와는 다르게 10이라는 값을 탐색한 이후에, 그 값을 기준으로 같은 깊이에 있는 6, 14를 탐색하게 되죠.
            </p>
            <p>
              위에 나온 그림은 한가지 예시에 불과하고, 같은 깊이에 있는 값을 탐색하는 순서는 언제든지 바뀔 수 있으니 참고만 해주세요!
            </p>
            <hr />
            <div style={{ width: "100%", textAlign: "center" }}>
              <img src={graphtraversal1} alt="" style={{ width: "100%" }} />
            </div>
            <h2>DFS와 BFS의 예</h2>
            <p>
              그럼 우리, DFS와 BFS에는 어떤 예제가 있는지 한번 생각해 보는 시간을 가져볼까요?
            </p>
            <p>
              DFS는 미로찾기를 떠올릴 수 있을 것 같아요.
            </p>
            <p>
              미로의 출구를 찾고 싶을 때, 최대한 한 방향으로 갈 수 있을 때까지 쭉 가다가 더는 갈 수 없게 되면 다시 가장 가까운 갈림길로
              돌아와서 그 갈림길부터 다른 방향으로 탐색을 진행하는 것이 DFS라고 할 수 있을 것 같아요.
            </p>
            <p>
              BFS는 최단 거리를 계산하고 싶을 때 사용할 수 있을 거예요.
            </p>
            <p>
              모든 경로에 대해 한 단계 한 단계 탐색해 나가기 때문에,
              목적지까지 최소한으로 걸리는 시간을 찾으려면 DFS 보다 BFS를 활용하는 것이 효과적일 거예요!
            </p>
          </Container>
        </div>
      }
      {isTabletOrMobile &&
        <div>
          <h1 style={{marginTop:"30px", marginBottom:"30px"}}>Graph Traversals</h1>
          <Container style={{ width: "90%", textAlign: "left" }}>
            <img src={graphtraversal_thumnail} alt="" />
            <Link to={"/study/ds/3"}>그래프란?</Link>
            <br />
            <Link to={"/study/ds/4"}>트리란?</Link>
            <h2>그래프, 트리 탐색(BFS,DFS)</h2>
            <p>
              무방향 그래프 혹은 트리를 탐색하는 방법은 대표적으로 2가지가 있어요.
            </p>
            <p>
              DFS와 BFS가 바로 그것인데요. 각각 무엇을 의미하는지, 어떤 방식으로 탐색이 진행되는지 차근차근 알아볼까요?
            </p>
            <hr />
            <div style={{ width: "100%", textAlign: "center" }}>
              <img src={DFS} alt="" style={{ width: "40%" }} />
            </div>
            <h2>DFS란</h2>
            <p>
              DFS(Depth First Search)는 그래프와 트리에서 깊이를 우선으로 탐색하는 방법이에요.
            </p>
            <p>
              위의 그림을 참조하여 설명해 볼까요?
            </p>
            <p>
              10이란 값을 먼저 탐색했고, 그다음으로는 6 - 3을 탐색하는 것을 보니 한가지 방향으로 먼저 탐색이 일어나네요.
            </p>
            <p>
              더 이상 깊이가 존재하지 않는다면 반대 방향으로 탐색이 일어나고요.
            </p>
            <p>
              이처럼 한 쪽 끝까지 우선 탐색하는 것이 DFS에요.
            </p>
            <hr />
            <div style={{ width: "100%", textAlign: "center" }}>
              <img src={BFS} alt="" style={{ width: "40%" }} />
            </div>
            <h2>BFS란</h2>
            <p>
              BFS(Breadth First Search)는 DFS와는 반대로 너비를 우선으로 탐색하는 방법이에요.
            </p>
            <p>
              더 깊은 위치를 탐색하기 이전에, 같은 깊이에 있는 위치를 탐색하는 것이죠.
            </p>
            <p>
              위 그림을 보면 한 번에 이해할 수 있을 거예요.
            </p>
            <p>
              DFS와는 다르게 10이라는 값을 탐색한 이후에, 그 값을 기준으로 같은 깊이에 있는 6, 14를 탐색하게 되죠.
            </p>
            <p>
              위에 나온 그림은 한가지 예시에 불과하고, 같은 깊이에 있는 값을 탐색하는 순서는 언제든지 바뀔 수 있으니 참고만 해주세요!
            </p>
            <hr />
            <div style={{ width: "100%", textAlign: "center" }}>
              <img src={graphtraversal1} alt="" style={{ width: "100%" }} />
            </div>
            <h2>DFS와 BFS의 예</h2>
            <p>
              그럼 우리, DFS와 BFS에는 어떤 예제가 있는지 한번 생각해 보는 시간을 가져볼까요?
            </p>
            <p>
              DFS는 미로찾기를 떠올릴 수 있을 것 같아요.
            </p>
            <p>
              미로의 출구를 찾고 싶을 때, 최대한 한 방향으로 갈 수 있을 때까지 쭉 가다가 더는 갈 수 없게 되면 다시 가장 가까운 갈림길로
              돌아와서 그 갈림길부터 다른 방향으로 탐색을 진행하는 것이 DFS라고 할 수 있을 것 같아요.
            </p>
            <p>
              BFS는 최단 거리를 계산하고 싶을 때 사용할 수 있을 거예요.
            </p>
            <p>
              모든 경로에 대해 한 단계 한 단계 탐색해 나가기 때문에,
              목적지까지 최소한으로 걸리는 시간을 찾으려면 DFS 보다 BFS를 활용하는 것이 효과적일 거예요!
            </p>
          </Container>
        </div>
      }
    </div>
  )
}

export default GraphTraversal