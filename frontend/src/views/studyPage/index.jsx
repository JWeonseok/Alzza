import stack_thumnail from '../../assets/study/stack_thumnail.png'
import queue_thumnail from '../../assets/study/queue_thumnail.png'
import graph_thumnail from '../../assets/study/graph_thumnail.jpg'
import tree_thumnail from '../../assets/study/tree_thumnail.jpg'
import list_thumnail from '../../assets/study/list_thumnail.PNG'
import sort_thumnail from '../../assets/study/sort_thumnail.jpg'
import graphtraversal_thumnail from '../../assets/study/graphtraversal1.jpg'
import binarysearch_thumnail from '../../assets/study/binarysearch_thumnail.jpg'
import { Card, CardGroup } from 'react-bootstrap';

import '../../styles/main.css';
import { NavLink, useParams } from 'react-router-dom'


const struct_contents=[
  {id:1, title:'스택', img: stack_thumnail, desc:''},
  {id:2, title:'큐', img: queue_thumnail, desc:''},
  {id:3, title:'그래프', img: graph_thumnail, desc:''},
  {id:4, title:'트리', img: tree_thumnail, desc:''},
  {id:5, title:'리스트', img: list_thumnail, desc:''},
]

const algo_contents=[
  {id:1, title:'정렬', img: sort_thumnail, desc:''},
  {id:2, title:'이분탐색', img: binarysearch_thumnail, desc:''},
  {id:3, title:'그래프탐색', img: graphtraversal_thumnail, desc:''},
]

function StructStudyList() {
  var lis = []
  for (var i = 0; i < struct_contents.length; i++) {
    lis.push(
      <Card key={struct_contents[i].id}><NavLink to={"/study/ds/"+struct_contents[i].id}>
        <Card.Img variant="top" src={struct_contents[i].img} className="study-card-image"/>
        <Card.Body>
          <Card.Title>{struct_contents[i].title}</Card.Title>
          <Card.Text>
            {struct_contents[i].desc}
          </Card.Text>
        </Card.Body>  
      </NavLink></Card>
    )
  }
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems:"center" }}>
      <h1>자료구조</h1>
      <CardGroup className="row row-cols-1 row-cols-md-4 g-4" style={{width: "60%"}}>
        {lis}
      </CardGroup>
    </div>
  )
}

function AlgoStudyList() {
  var lis = []
  for (var i = 0; i < algo_contents.length; i++) {
    lis.push(
      <Card key={algo_contents[i].id}><NavLink to={"/study/algo/"+algo_contents[i].id}>
        <Card.Img variant="top" src={algo_contents[i].img} className="study-card-image"/>
        <Card.Body>
          <Card.Title>{algo_contents[i].title}</Card.Title>
          <Card.Text>
            {algo_contents[i].desc}
          </Card.Text>
        </Card.Body>
      </NavLink></Card>
    )
  }
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems:"center" }}>
      <h1>알고리즘</h1>
      <CardGroup className="row row-cols-1 row-cols-md-4 g-4" style={{width: "60%"}}>
        {lis}
      </CardGroup>
    </div>
  )
}

function StudyPage() {
  var params = useParams();
  console.log(params)
  var type = params.type
  var view = null
  if (type === 'ds') {
    view = <StructStudyList/>
  }
  else if (type === 'algo') {
    view = <AlgoStudyList/>
  }

  return (
    <div>
      {view}

      {/* <div class="row row-cols-1 row-cols-md-4 g-4" style={{width: "60%"}}>


        <div class="col">
          <div class="card">
            <img src={stack_thumnail} class="card-img-top" className="study-card-image" alt="..."/>
            <div class="card-body">
              <h5 class="card-title text-start">스택</h5>
              <p class="card-text"></p>
            </div>
          </div>
        </div>


        <div class="col">
          <div class="card">
            <img src={queue_thumnail} class="card-img-top" className="study-card-image" alt="..."/>
            <div class="card-body">
              <h5 class="card-title text-start">큐</h5>
              <p class="card-text"></p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src={graph_thumnail} class="card-img-top" className="study-card-image" alt="..."/>
            <div class="card-body">
              <h5 class="card-title text-start">그래프</h5>
              <p class="card-text"></p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src={tree_thumnail} class="card-img-top" className="study-card-image" alt="..."/>
            <div class="card-body">
              <h5 class="card-title text-start">트리</h5>
              <p class="card-text"></p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src={list_thumnail} class="card-img-top" className="study-card-image" alt="..."/>
            <div class="card-body">
              <h5 class="card-title text-start">리스트</h5>
              <p class="card-text"></p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default StudyPage