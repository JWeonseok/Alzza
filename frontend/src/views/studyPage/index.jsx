import stack_thumnail from '../../assets/study/stack_thumnail.png'
import queue_thumnail from '../../assets/study/queue_thumnail.png'
import graph_thumnail from '../../assets/study/graph_thumnail.jpg'
import tree_thumnail from '../../assets/study/tree_thumnail.jpg'
import list_thumnail from '../../assets/study/list_thumnail.PNG'
import sort_thumnail from '../../assets/study/sort_thumnail.jpg'
import graphtraversal_thumnail from '../../assets/study/graphtraversal1.jpg'
import binarysearch_thumnail from '../../assets/study/binarysearch_thumnail.jpg'

import '../../styles/main.css';
import '../../styles/studyCard.css';
import { NavLink, useParams } from 'react-router-dom'
import { Container } from 'react-bootstrap'


const struct_contents=[
  {id:1, title:'스택', e_title:"stack", img: stack_thumnail, desc:"스택은 배열의 끝에서만 데이터를 접근할 수 있는 자료 구조..."},
  {id:2, title:'큐', e_title:"queue", img: queue_thumnail, desc:'큐는 배열에 항목이 들어온 순서대로 접근 가능한 자료구조...'},
  {id:3, title:'그래프', e_title:"graph", img: graph_thumnail, desc:'그래프는 공집합이 아닌 정점(Vertex)의 유한집합 V와...'},
  {id:4, title:'트리', e_title:"tree", img: tree_thumnail, desc:'트리는 계층적 데이터를 저장하고 활용하기 위한 자료구조...'},
  {id:5, title:'리스트', e_title:"list", img: list_thumnail, desc:'리스트는 다량의 데이터를 다루는데 가장 단순한 방법...'},
]

const algo_contents=[
  {id:1, title:'정렬', e_title:"sort", img: sort_thumnail, desc:'알고리즘에서 정렬이란, 말 그대로 어떤 항목들로 이루어진...'},
  {id:2, title:'이분탐색', e_title:"binary search", img: binarysearch_thumnail, desc:'이분 탐색은 정렬된 배열 내에서 찾고자 하는 값의 위치를 찾는 탐색...'},
  {id:3, title:'그래프탐색', e_title:"graph traversal", img: graphtraversal_thumnail, desc:'무방향 그래프 혹은 트리를 탐색하는 방법은 대표적으로 2가지가 있...'},
]

function StructStudyList() {
  var lis = []
  for (var i = 0; i < struct_contents.length; i++) {
    lis.push(
      <div className="col" key={struct_contents[i].id}>
        <div className="card" style={{boxShadow:"2px 2px 2px 2px #C4C4C4"}}><NavLink to={"/study/ds/"+struct_contents[i].id} style={{textDecoration:"none", textAlign:"left", display: "flex", flexDirection: "column", alignItems:"center"}}>
          <img src={struct_contents[i].img} className="card-img-top" alt="" style={{height:"200px"}} />
          <div className="card-body" style={{width:"87%", padding:"16px 0px 0px 0px" }}>
            <h5 className="card-title" style={{color:"black", fontWeight:"bold"}} >{struct_contents[i].title}</h5>
            <p className="card-text" style={{color:"black", fontSize:"13px"}}>{struct_contents[i].desc}</p>
            <hr/>
          </div>
          <div style={{width:"87%", marginBottom:"3px"}}>
            <small style={{color:"gray"}} >{struct_contents[i].e_title}</small>
          </div>
        </NavLink></div>
      </div>
    )
  }
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems:"center"}}>
      <h1 style={{marginBottom:"50px", marginTop:"80px", fontWeight:"900"}}>자료구조</h1>
      <Container>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {lis}
        </div>
      </Container>
    </div>
  )
}

function AlgoStudyList() {
  var lis = []
  for (var i = 0; i < algo_contents.length; i++) {
    lis.push(
      <div className="col" key={algo_contents[i].id}>
        <div className="card" style={{boxShadow:"2px 2px 2px 2px #C4C4C4"}}><NavLink to={"/study/algo/"+algo_contents[i].id} style={{textDecoration:"none", textAlign:"left", display: "flex", flexDirection: "column", alignItems:"center"}}>
          <img src={algo_contents[i].img} className="card-img-top" alt="" style={{height:"200px"}} />
          <div className="card-body" style={{width:"87%", padding:"16px 0px 0px 0px", }}>
            <h5 className="card-title" style={{color:"black", fontWeight:"bold"}} >{algo_contents[i].title}</h5>
            <p className="card-text" style={{color:"black", fontSize:"13px"}}>{algo_contents[i].desc}</p>
            <hr/>
          </div>
          <div style={{width:"87%", marginBottom:"3px"}}>
            <small style={{color:"gray"}} >{algo_contents[i].e_title}</small>
          </div>

        </NavLink></div>
      </div>


    )
  }
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems:"center" }}>
      <h1 style={{marginBottom:"50px", marginTop:"80px", fontWeight:"900"}}>알고리즘</h1>
      <Container>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {lis}
        </div>
      </Container>
    </div>
  )
}

function StudyPage() {
  var params = useParams();
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
    </div>
  )
}

export default StudyPage