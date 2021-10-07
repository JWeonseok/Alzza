import { useParams } from 'react-router-dom'

import Stack from './components/stack'
import Queue from './components/queue'
import Graph from './components/graph'
import List from './components/list'
import Tree from './components/tree'
import Sort from './components/sort'
import BinarySearch from './components/binarysearch'
import GraphTraversal from './components/graphtraversal'

import '../../styles/studyCard.css';

const struct_contents = [
  { id: 1, view: <Stack /> },
  { id: 2, view: <Queue /> },
  { id: 3, view: <Graph /> },
  { id: 4, view: <Tree /> },
  { id: 5, view: <List /> },
]

const algo_contents = [
  { id: 1, view: <Sort /> },
  // 이분탐색
  { id: 2, view: <BinarySearch /> },
  // DFS,BFS
  { id: 3, view: <GraphTraversal /> },
]

function StudyDetailPage() {
  var params = useParams();
  var id = Number(params.id);
  var view = null
  if (params.type === 'ds') {
    for (let i = 0; i <= struct_contents.length; i++) {
      if (id === struct_contents[i].id) {
        view = struct_contents[i].view
        break
      }
    }
  }
  else if (params.type === 'algo') {
    for (let i = 0; i <= algo_contents.length; i++) {
      if (id === algo_contents[i].id) {
        view = algo_contents[i].view
        break
      }
    }
  }


  return (
    <div>
      {view}
    </div>
  )
}

export default StudyDetailPage