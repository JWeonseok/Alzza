import { Container, OverlayTrigger, Tooltip } from 'react-bootstrap'
import '../../../styles/studyCard.css';
import { useMediaQuery } from 'react-responsive'
import {Link} from 'react-router-dom';

import graph_thumnail from '../../../assets/study/graph_thumnail.jpg'
import graph1 from '../../../assets/study/graph1.png'
import graph2 from '../../../assets/study/graph2.PNG'
import graph3 from '../../../assets/study/graph3.PNG'
import graph4 from '../../../assets/study/graph4.PNG'
import graph5 from '../../../assets/study/graph5.PNG'
import graph6 from '../../../assets/study/graph6.png'

import graphgameimage from '../../../assets/game/graph.png'

import '../../../styles/studyCard.css';


function Graph() {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 800 })
  const isTabletOrMobile = useMediaQuery({ maxWidth: 800 })
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      그래프 게임하기
    </Tooltip>
  )
  return (
    <div id="study">
      {isDesktopOrLaptop &&
        <div>
          <h1 style={{marginTop:"80px", marginBottom:"50px"}}>Graph</h1>
          <Container style={{ width: "50%", textAlign: "left" }}>
            <div id="fixed">
              <OverlayTrigger
                placement="top"
                overlay={renderTooltip}
              >
                <button id="gamebutton" style={{width:"100px", height:"100px", padding:"0", border:"solid 2px #6562CF", borderRadius:"50px"}}>
                  <Link to={{
                    pathname: "/game/ds/3"
                  }} >
                    <img src={graphgameimage} id="gameimage" style={{margin:"0", width:"100%", height:"100%", border:"solid 2px #6562CF", borderRadius:"50px"}} alt=""/>
                  </Link>
                </button>
              </OverlayTrigger>
            </div>
            <div style={{ width: "100%", textAlign: "center" }}>
              <img src={graph_thumnail} alt="" style={{ width: "60%" }} />
            </div>
            <h2>그래프란?</h2>
            <p>
              그래프는 공집합이 아닌 정점(Vertex)의 유한집합 V와 두 정점의 연결선이 간선(Edge)의 집합 E로 구성되는 특수한 형태의 자료구조에요

            </p>
            <p>
              설명이 조금 어렵게 느껴지시나요? 그럼 조금 더 자세히 알아보도록 할까요?
            </p>
            <hr />
            <div style={{ width: "100%", textAlign: "center" }}>
              <img src={graph1} alt="" style={{ width: "60%" }} />
            </div>
            <h2>그래프의 구성 및 용어 표현</h2>
            <p style={{ fontWeight: "bold" }}>
              정점(Vertex)
            </p>
            <p>
              위 그림에서, 각각의 숫자에 해당하는 부분을 바로 정점이라고 해요.
            </p>

            <p style={{ fontWeight: "bold" }}>
              간선(Edge)
            </p>
            <p>
              정점과 정점 사이에 연결되어있는 선이 보이시나요? 이 선을 바로 간선이라고 해요. 그래프는 정점과 간선으로 이루어져 있다고
              할 수 있죠.
            </p>

            <p style={{ fontWeight: "bold" }}>
              인접(Adjacent)
            </p>
            <p>
              어떤 정점과 정점을 연결하는 간선이 존재할 때, 그 정점들은 서로 "인접해 있다"라고 해요.
            </p>

            <hr />
            <h2 style={{ marginTop: "50px" }}>그래프의 종류</h2>
            <p>
              그래프는 방향에 따라 무방향 그래프와 방향 그래프, 간선이 어떻게 연결되었는지에 따라 부분 그래프, 완전 그래프로 나눌 수 있어요.

            </p>
            <p>
              하나하나 알아보도록 할까요?
            </p>
            <div style={{ width: "100%", textAlign: "center" }}>
              <img src={graph2} alt="" style={{ width: "40%" }} />
            </div>
            <p style={{ fontWeight: "bold" }}>
              1. 무방향 그래프 (Undirected Graph)
            </p>
            <p>
              무방향 그래프는 말 그대로 간선에 방향이 없는 그래프에요. 간선으로 연결된 노드는 서로 인접해 있죠.
            </p>
            <div style={{ width: "100%", textAlign: "center" }}>
              <img src={graph3} alt="" style={{ width: "13%" }} />
            </div>
            <p style={{ fontWeight: "bold" }}>
              2. 방향 그래프 (Directed Graph)
            </p>
            <p>
              방향 그래프는 정점과 정점을 연결하는 간선에 방향을 표시하는 선이 있는 그래프에요.
            </p>
            <p>
              위 그림에서처럼 정점 1에서 정점 2를 연결하는 방향 그래프가 있다면,
              1에서 2로 가는 경로는 있지만 2에서 1로 가는 경로는 존재하지 않아요.
            </p>
            <div style={{ width: "100%", textAlign: "center" }}>
              <img src={graph5} alt="" style={{ width: "40%" }} />
            </div>
            <p style={{ fontWeight: "bold" }}>
              3. 부분 그래프 (Sub Graph)
            </p>
            <p>
              부분 그래프는 어떤 그래프에 대해 일부 정점과 간선으로만 이루어진 그래프를 말해요.
            </p>
            <div style={{ width: "100%", textAlign: "center" }}>
              <img src={graph4} alt="" style={{ width: "40%" }} />
            </div>
            <p style={{ fontWeight: "bold" }}>
              4. 완전 그래프 (Complete Graph)
            </p>
            <p>
              정점을 잇는 간선이 더 이상 존재하지 않는 그래프에요.
            </p>
            <p>
              즉 간선의 개수가 최대인 그래프라고 할 수 있죠. 위 그림을 같이 참고하면
              더욱 쉽게 이해할 수 있을 거예요.
            </p>
            <hr />
            <img src={graph6} alt="" />
            <h2>실생활 예</h2>

            <p>
              가장 대표적으로 차량의 내비게이션을 그래프의 예로 들 수 있을 것 같아요.
            </p>
            <p>
              내비게이션에는 한 지점에서 목적지로 가는 경로가 여러 가지 있고,
              가장 빨리 갈 수 있는 방법을 안내해주죠.
            </p>
            <p>
              현재 위치와 목적지를 각각 정점이라고 생각한다면, 목적지까지 향하는 경로들을 간선이라고 할 수 있겠네요!
            </p>
          </Container>
        </div>
      }
      {isTabletOrMobile &&
        <div>
          <h1 style={{marginTop:"30px", marginBottom:"30px"}}>Graph</h1>
          <Container style={{ width: "90%", textAlign: "left" }}>
            <div style={{ width: "100%", textAlign: "center" }}>
              <img src={graph_thumnail} alt="" style={{ width: "60%" }} />
            </div>
            <h2>그래프란?</h2>
            <p>
              그래프는 공집합이 아닌 정점(Vertex)의 유한집합 V와 두 정점의 연결선이 간선(Edge)의 집합 E로 구성되는 특수한 형태의 자료구조에요

            </p>
            <p>
              설명이 조금 어렵게 느껴지시나요? 그럼 조금 더 자세히 알아보도록 할까요?
            </p>
            <hr />
            <div style={{ width: "100%", textAlign: "center" }}>
              <img src={graph1} alt="" style={{ width: "60%" }} />
            </div>
            <h2>그래프의 구성 및 용어 표현</h2>
            <p style={{ fontWeight: "bold" }}>
              정점(Vertex)
            </p>
            <p>
              위 그림에서, 각각의 숫자에 해당하는 부분을 바로 정점이라고 해요.
            </p>

            <p style={{ fontWeight: "bold" }}>
              간선(Edge)
            </p>
            <p>
              정점과 정점 사이에 연결되어있는 선이 보이시나요? 이 선을 바로 간선이라고 해요. 그래프는 정점과 간선으로 이루어져 있다고
              할 수 있죠.
            </p>

            <p style={{ fontWeight: "bold" }}>
              인접(Adjacent)
            </p>
            <p>
              어떤 정점과 정점을 연결하는 간선이 존재할 때, 그 정점들은 서로 "인접해 있다"라고 해요.
            </p>

            <hr />
            <h2 style={{ marginTop: "50px" }}>그래프의 종류</h2>
            <p>
              그래프는 방향에 따라 무방향 그래프와 방향 그래프, 간선이 어떻게 연결되었는지에 따라 부분 그래프, 완전 그래프로 나눌 수 있어요.

            </p>
            <p>
              하나하나 알아보도록 할까요?
            </p>
            <div style={{ width: "100%", textAlign: "center" }}>
              <img src={graph2} alt="" style={{ width: "40%" }} />
            </div>
            <p style={{ fontWeight: "bold" }}>
              1. 무방향 그래프 (Undirected Graph)
            </p>
            <p>
              무방향 그래프는 말 그대로 간선에 방향이 없는 그래프에요. 간선으로 연결된 노드는 서로 인접해 있죠.
            </p>
            <div style={{ width: "100%", textAlign: "center" }}>
              <img src={graph3} alt="" style={{ width: "13%" }} />
            </div>
            <p style={{ fontWeight: "bold" }}>
              2. 방향 그래프 (Directed Graph)
            </p>
            <p>
              방향 그래프는 정점과 정점을 연결하는 간선에 방향을 표시하는 선이 있는 그래프에요.
            </p>
            <p>
              위 그림에서처럼 정점 1에서 정점 2를 연결하는 방향 그래프가 있다면,
              1에서 2로 가는 경로는 있지만 2에서 1로 가는 경로는 존재하지 않아요.
            </p>
            <div style={{ width: "100%", textAlign: "center" }}>
              <img src={graph4} alt="" style={{ width: "40%" }} />
            </div>
            <p style={{ fontWeight: "bold" }}>
              3. 부분 그래프 (Sub Graph)
            </p>
            <p>
              부분 그래프는 어떤 그래프에 대해 일부 정점과 간선으로만 이루어진 그래프를 말해요.
            </p>
            <div style={{ width: "100%", textAlign: "center" }}>
              <img src={graph5} alt="" style={{ width: "40%" }} />
            </div>
            <p style={{ fontWeight: "bold" }}>
              4. 완전 그래프 (Complete Graph)
            </p>
            <p>
              정점을 잇는 간선이 더 이상 존재하지 않는 그래프에요.
            </p>
            <p>
              즉 간선의 개수가 최대인 그래프라고 할 수 있죠. 위 그림을 같이 참고하면
              더욱 쉽게 이해할 수 있을 거예요.
            </p>
            <hr />
            <img src={graph6} alt="" />
            <h2>실생활 예</h2>

            <p>
              가장 대표적으로 차량의 내비게이션을 그래프의 예로 들 수 있을 것 같아요.
            </p>
            <p>
              내비게이션에는 한 지점에서 목적지로 가는 경로가 여러 가지 있고,
              가장 빨리 갈 수 있는 방법을 안내해주죠.
            </p>
            <p>
              현재 위치와 목적지를 각각 정점이라고 생각한다면, 목적지까지 향하는 경로들을 간선이라고 할 수 있겠네요!
            </p>
          </Container>
        </div>
      }

    </div>
  )
}

export default Graph