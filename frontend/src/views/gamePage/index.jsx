import React from 'react';
import '../../styles/gameCard.css';
import {Link} from 'react-router-dom';
import img1 from '../../assets/gamestack.png'

function GamePage(props) {
  const ds = [
    {id: 1, title: '스택: 프링글스 완전 범죄', sort: 'Stack', img: img1, content: '형의 프링글스를 몰래 훔쳐 먹고 싶어하는 동생을 위해 완전 범죄를 계획해라! 동생을 도와 형에게 발각되지 않도록 원래 상태로 복구해보자' },
    {id: 2, title: '큐: 은행 줄서기', sort: 'Queue', img: img1, content: 'lorem ipsum dljlsj lwjgijwlij lwjgljpqr3' },
    {id: 3, title: '트리: 오리 대모험', sort: 'Tree', img: img1, content: 'lorem ipsum dljlsj lwjgijwlij lwjgljpqr3' },
    {id: 4, title: '그래프: 완전 그래프 완성시키기', sort: 'Graph', img: img1, content: 'lorem ipsum dljlsj lwjgijwlij lwjgljpqr3' },
    {id: 5, title: '리스트: 나는야 단어 제조가', sort: 'List', img: img1, content: 'lorem ipsum dljlsj lwjgijwlij lwjgljpqr3' },
  ]

  const algo = [
    {id: 1, title: '정렬: 섞어 섞어', sort: 'Sort', img: img1, content: 'lorem ipsum dljlsj lwjgijwlij lwjgljpqr3' },
    {id: 2, title: '전중후위순회', sort: 'Tree', img: img1, content: 'lorem ipsum dljlsj lwjgijwlij lwjgljpqr3' },
    {id: 3, title: 'dfs bfs', sort: 'Graph', img: img1, content: 'lorem ipsum dljlsj lwjgijwlij lwjgljpqr3' },
  ]

  let array = [];
  let array2 = [];

  if (props.match.params.category === "ds") {
    for (let i = 0; i < ds.length; i++) {
      array.push(
        <div className="gamecard-container" key={ds[i].id}>	       
          <div className="game-details">		
            <h1>{ds[i].title}</h1>
            <h3>{ds[i].sort}</h3>		
            <p className="information">{ds[i].content}</p>
            <div className="control"> 
              <Link to={{
                pathname: `ds/${ds[i].id}`,
                state: {
                  data: ds
                }
              }}>
                <button><span>Start</span></button>
              </Link>
            </div>
          </div>           
          <div className="game-image">
            <img src={ds[i].img} alt=""></img>
          </div>
        </div>
      )
    }
    return (
      <div className="gamelist-container">
        <h1>자료구조</h1>
        {array}
      </div>
    )
  } else if (props.match.params.category === "algo") {
    for (let i = 0; i < algo.length; i++) {
      array2.push(
        <div className="gamecard-container" key={algo[i].id}>	       
          <div className="game-details">		
            <h1>{algo[i].title}</h1>
            <h3>{algo[i].sort}</h3>		
            <p className="information">{algo[i].content}</p>
            <div className="control">
              <Link to={{
                pathname: `algo/${algo[i].id}`,
                state: {
                  data: algo
                }
              }}>
                <button><span>Start</span></button>
              </Link>
            </div>
          </div>           
          <div className="game-image">
            <img src={algo[i].img} alt=""></img>
          </div>
        </div>
      )
    }
    return (
      <div className="gamelist-container">
        <h1>알고리즘</h1>
        {array2}
      </div>
    )
  }
}


export default GamePage;
