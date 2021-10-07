import React, { useEffect, useRef, useState } from 'react';
import {Link} from 'react-router-dom';
// import Container from 'react-bootstrap/Container'
import { useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive'
import Unity, { UnityContext } from "react-unity-webgl";
import { getUserStage, updateUserStage } from '../../lib/store/store';
import '../../styles/gameDesc.css';
import stack from '../../assets/game/stack.png'
import queue from '../../assets/game/queue.png'
import graph from '../../assets/game/graph.png'
import tree from '../../assets/game/tree.png'
import sort from '../../assets/game/sort.png'
import mid from '../../assets/game/mid.png'


const gameName = {
  1: "stack",
  2: "queue",
  3: "graph",
  4: "tree",
  5: "sort",
  6: "binarysearch",
}

const gameObjectName = {
  1: "Canvas",
  4: "Canvas",
  6: "GameManager",
}

const ds = [
  {id: 1, title: '스택: 별과자 완전 범죄', sort: 'Stack', img: stack, content: '형의 별과자가 너무 탐났던 사피. 음성인식 로봇 알짜의 도움을 받아 몰래 훔쳐먹자! 훔쳐먹고 나서 후환이 두려워진 사피. 알짜의 도움을 받아 과자를 원상복구 하자!'},
  {id: 2, title: '큐: 산타를 도와라', sort: 'Queue', img: queue, content: '크리스마스를 앞두고 한창 준비 중인 산타마을. 컨베이어 벨트가 끊어져 선물들이 다 섞여버렸다! 산타를 도와 문제를 해결하고 큐 개념을 같이 학습해봐요!!' },
  {id: 3, title: '그래프: 보물 찾기 대모험', sort: 'Graph', img: graph, content: '다리를 연결하고 보물을 찾아가는 Graph Game! 보물을 찾아가며 그래프의 주요 특징들을 차근차근 배워가요~~' },
  {id: 4, title: '트리: 공통 조상 찾기', sort: 'Tree', img: tree, content: '그들 사이에 있는 복잡한 관계는? 우리 함께 공통 조상을 찾아봐요! 제한시간이 많지 않으니 서둘러야 할거에요~ 그럼 이제 시작해볼까요?' },
]

const algo = [
  {id: 1, title: '정렬: 동물의 왕국', sort: 'Sort', img: sort, content: '동물들이 길을 잃고 섞여버렸다! 우리 올바른 순서대로 동물들을 정렬시켜볼까요? 아쉽게도 간장이는 다음 시즌에서 만나보실 수 있습니다. 양념이와 치킨이 정렬!' },
  {id: 2, title: '이분탐색: 도둑을 잡아라!', sort: 'Binary Search', img: mid, content:  '도둑을 잡았더니 이분탐색 개념이 머리속에 쏙쏙!? 목격자 이분탐씨와 함께 김싸피 순경을 도와 도둑을 잡아봐요!!' },
]


function GameDetailPage(props) {
  const userId = sessionStorage.getItem('userId')
  const accessToken = sessionStorage.getItem('accessToken')
  const refreshToken = sessionStorage.getItem('refreshToken')
  const type = props.match.params.category
  const gameId = props.match.params.gameId

  // useRef 사용
  let stageId = useRef(0)
  let currentStage = useRef(0)
  const dispatch = useDispatch()
  let gameKey = parseInt(gameId)
  if (type === "algo") {
    gameKey += 4
  }

  //게임 메뉴
  const [showGames, setShowGames] = useState(false);
  const openGames = (e) => {
    setShowGames(showGames => !showGames);
  }

  // 반응형 조절
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 800 })
  const isTabletOrMobile = useMediaQuery({ maxWidth: 800 })

  // 현재 게임 stage를 어디까지 클리어했었는지 받아오기 
  useEffect(() => {
    const body = {
      accessToken,
      refreshToken,
    }
    dispatch(getUserStage(userId, gameKey, body))
      .then((res) => {
        stageId.current = parseInt(res.payload.data.stageId)
        currentStage.current = parseInt(res.payload.data.curStage)
    })
  }, [accessToken, dispatch, gameKey, refreshToken, userId])


  const handleUpdateUserStage = (stageNum) => {
    const body = {
      accessToken,
      refreshToken,
      stageId: stageId.current,
      userId,
      gameCode: gameKey,
      curStage: stageNum,
    }
    dispatch(updateUserStage(body))
      .then((res) => {
        console.log('updateUserStage', res)
    })
  }

  const unityContext = new UnityContext({
    loaderUrl: `/unity/${gameName[gameKey]}/build.loader.js`,
    dataUrl: `/unity/${gameName[gameKey]}/build.data`,
    frameworkUrl: `/unity/${gameName[gameKey]}/build.framework.js`,
    codeUrl: `/unity/${gameName[gameKey]}/build.wasm`,
  });

  unityContext.on("SetStage", () => {
    const body = {
      accessToken,
      refreshToken,
    }
    dispatch(getUserStage(userId, gameKey, body))
      .then((res) => {
        stageId.current = parseInt(res.payload.data.stageId)
        currentStage.current = parseInt(res.payload.data.curStage)
        unityContext.send(gameObjectName[gameKey], "SetStageFromReact", currentStage.current); 
    })
  });

  unityContext.on("Stage1Clear", () => {
    handleUpdateUserStage(1)
  });
  
  unityContext.on("Stage2Clear", () => {
    handleUpdateUserStage(2)
  });
  
  unityContext.on("Stage3Clear", () => {
    handleUpdateUserStage(3)
  });


  return(
    <div>
      <div className={isDesktopOrLaptop ? "game-header" : "game-header-res"}>
        { type === "ds" ?
          <h1 className="game-title">{ds[gameId-1].title}</h1>
          :
          <h1 className="game-title">{algo[gameId-1].title}</h1>
        }
      </div>
      
        <Unity className={isDesktopOrLaptop ? "game-play" : "game-play-res"} unityContext={unityContext} />
        {/* <div className={isDesktopOrLaptop ? "game-play" : "game-play-res"}>
          게임 들어갈 위치
        </div> */}
      {/* <Container>
      </Container> */}

      <div className={isDesktopOrLaptop ? "show-game-menu" : "hide-game-menu"}>
        <div className={`menu ${showGames ? "" : "closed"}`}>
          <div className="stack button">
            <a href="/game/ds/1" className="game-atag">
              <div className="size-outline">
                <img src={ds[0].img} alt="" className="game-img"/>
                <p className="game-type">스택</p>
              </div>
            </a>
          </div>
          <div className="queue button">
            <a href="/game/ds/2" className="game-atag">
              <div className="size-outline">
                <img src={ds[1].img} alt="" className="game-img"/>
                <p className="game-type size1">큐</p>
              </div>
            </a>
          </div>
          <div className="graph button">
            <a href="/game/ds/3" className="game-atag">
              <div className="size-outline">
                <img src={ds[2].img} alt="" className="game-img"/>
                <p className="game-type size2">그래프</p>
              </div>
            </a >
          </div>
          <div className="tree button">
            <a href="/game/ds/4" className="game-atag">
              <div className="size-outline">
                <img src={ds[3].img} alt="" className="game-img"/>
                <p className="game-type">트리</p>
              </div>
            </a >
          </div>
          <div className="sort button">
            <a href="/game/algo/1" className="game-atag">
              <div className="size-outline">
                <img src={algo[0].img} alt="" className="game-img"/>
                <p className="game-type">정렬</p>
              </div>
            </a >
          </div>
          <div className="mid button">
            <a href="/game/algo/2" className="game-atag">
              <div className="size-outline">
                <img src={algo[1].img} alt="" className="game-img"/>
                <p className="game-type">탐색</p>
              </div>
            </a >
          </div>
          { showGames === false ?
            <div className="main button" onClick={openGames}>Menu</div>
            :
            <div className="main button" onClick={openGames}>Close</div>
          }
       </div>
      </div>

      {isDesktopOrLaptop && 
        <div className="game-help">
          <div className="game-help-title">
            🎧️ 음성 인식 도움말
          </div>
          <div className="game-help-desc">
            <p>⚡ 게임 내 정확한 음성 인식을 위해 마이크를 사용하시거나, 웹캠, 이어폰의 마이크를 사용하시길 권장합니다.</p>
            <p>⚡ 원활한 음성 인식을 위해, 게임 내에서 재생 버튼을 누르고 0.5초 기다리신 뒤, 명령을 말씀하시고 나서 0.5초 기다리신 뒤 정지 버튼을 눌러주시기 바랍니다.</p>
          </div>
        </div>    
      }
      {isTabletOrMobile && 
        <div className="game-help-res">
          <div className="game-help-card-res">
            <div className="game-help-title-res">
              🎧️ 음성 인식 도움말
            </div>
            <div className="game-help-desc-res">
              <p>⚡ 게임 내 정확한 음성 인식을 위해 마이크를 사용하시거나, 웹캠, 이어폰의 마이크를 사용하시길 권장합니다.</p>
              <p>⚡ 원활한 음성 인식을 위해, 게임 내에서 재생 버튼을 누르고 0.5초 기다리신 뒤, 명령을 말씀하시고 나서 0.5초 기다리신 뒤 정지 버튼을 눌러주시기 바랍니다.</p>
            </div>
          </div>
        </div>
      }


      <div className={isDesktopOrLaptop ? "go-to-study" : "go-to-study-res"}>
       { type === "ds" ?
          <Link to={`/study/${type}/${ds[gameId-1].id}`} className="game-atag">
              <button className="after-study">관련 학습 하러가기</button>
          </Link>
          :
          <Link to={`/study/${type}/${algo[gameId-1].id}`} className="game-atag">
              <button className="after-study">관련 학습 하러가기</button>
          </Link>
        }
      </div>

      <div>

      </div>
    </div>
  )
} 
  

export default GameDetailPage;