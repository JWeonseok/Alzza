import { Container} from 'react-bootstrap'
import '../../../styles/studyCard.css';
import { useMediaQuery } from 'react-responsive'

import list_thumnail from '../../../assets/study/list_thumnail.PNG'
import list1 from '../../../assets/study/list1.PNG'
import list2 from '../../../assets/study/list2.PNG'


function List() {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 800 })
  const isTabletOrMobile = useMediaQuery({ maxWidth: 800 })
  return (
    <div id="study">
      {isDesktopOrLaptop &&
        <div>
          <h1 style={{marginTop:"80px", marginBottom:"50px"}}>List</h1>
          <Container style={{ width: "50%", textAlign: "left" }}>
            <div style={{ width: "100%", textAlign: "center" }}>
              <img src={list_thumnail} alt="" style={{ width: "80%" }} />
            </div>
            <h2>리스트란?</h2>
            <p>
              리스트는 다량의 데이터를 다루는데 가장 단순한 방법이기 때문에 가장 빈번하게 사용되는 자료구조 중 하나인데요.
            </p>
            <p>
              구현 방법에 따라 순차리스트, 연결리스트 크게 두 가지로 분류할 수 있어요.
            </p>
            <p>
              각각 어떤 차이점이 있는지 알아보도록 할게요~
            </p>
            <hr />
            <div style={{ width: "100%", textAlign: "center" }}>
              <img src={list1} alt="" style={{ width: "90%" }} />
            </div>
            <h2>순차리스트</h2>
            <p>
              순차리스트(Sequential List)는 구현할 자료들을 논리적인 순서대로 메모리에 연속하여 저장하는 자료구조에요.
            </p>
            <p>
              데이터가 컴퓨터 메모리에 저장될 때, 저장 시작 위치부터 빈자리 없이 순서대로 저장된다는 뜻이죠.
            </p>
            <p>
              자료의 논리적인 순서와 물리적인 순서가 일치하는 구현 방식이라고 할 수 있어요!
            </p>
            <p>
              순차리스트의 이러한 특성 때문에, 데이터를 추가하거나 삭제하고 나면, 연속적인 순서를 유지하기 위해
              다른 데이터의 위치를 옮겨주는 작업이 필요해요.
            </p>
            <p>
              추가나 삭제가 많아지면 그만큼 시간이 많이 소요되겠죠?
            </p>
            <hr />
            <div style={{ width: "100%", textAlign: "center" }}>
              <img src={list2} alt="" style={{ width: "100%" }} />
            </div>
            <h2 style={{ marginTop: "50px" }}>연결리스트</h2>
            <p>
              연결리스트(Linked List)는 메모리에 저장된 물리적 위치나 순서와 상관없이, 연결로써 논리적인 순서를 표현하는 자료구조에요.
            </p>
            <p>
              순차리스트와 다르게, 각각의 독립적인 메모리에 저장되어 다음 주소값을 활용하여 마치 순차적으로 이루어진 것처럼 표현되죠.
            </p>
            <p>
              주소에 대한 정보가 더 필요하기 때문에 순차리스트에 비해 복잡해 보이고 어려워 보일 수도 있는데 왜 연결리스트를 사용하는 것일까요?
            </p>
            <p>
              연결리스트는 특정 데이터를 삽입하거나 삭제할 때 주소값만 수정하면 되기 때문에 순차리스트에 비해 연산속도가 빨라요.
            </p>
            <p>
              즉, 단순 탐색은 순차리스트가 더 효율적이지만 데이터의 추가, 삭제 작업에서는 연결리스트가 효율적이죠.
            </p>
          </Container>
        </div>

      }
      {isTabletOrMobile &&
        <div>
          <h1 style={{marginTop:"30px", marginBottom:"30px"}}>List</h1>
          <Container style={{ width: "90%", textAlign: "left" }}>
            <div style={{ width: "100%", textAlign: "center" }}>
              <img src={list_thumnail} alt="" style={{ width: "80%" }} />
            </div>
            <h2>리스트란?</h2>
            <p>
              리스트는 다량의 데이터를 다루는데 가장 단순한 방법이기 때문에 가장 빈번하게 사용되는 자료구조 중 하나인데요.
            </p>
            <p>
              구현 방법에 따라 순차리스트, 연결리스트 크게 두 가지로 분류할 수 있어요.
            </p>
            <p>
              각각 어떤 차이점이 있는지 알아보도록 할게요~
            </p>
            <hr />
            <div style={{ width: "100%", textAlign: "center" }}>
              <img src={list1} alt="" style={{ width: "90%" }} />
            </div>
            <h2>순차리스트</h2>
            <p>
              순차리스트(Sequential List)는 구현할 자료들을 논리적인 순서대로 메모리에 연속하여 저장하는 자료구조에요.
            </p>
            <p>
              데이터가 컴퓨터 메모리에 저장될 때, 저장 시작 위치부터 빈자리 없이 순서대로 저장된다는 뜻이죠.
            </p>
            <p>
              자료의 논리적인 순서와 물리적인 순서가 일치하는 구현 방식이라고 할 수 있어요!
            </p>
            <p>
              순차리스트의 이러한 특성 때문에, 데이터를 추가하거나 삭제하고 나면, 연속적인 순서를 유지하기 위해
              다른 데이터의 위치를 옮겨주는 작업이 필요해요.
            </p>
            <p>
              추가나 삭제가 많아지면 그만큼 시간이 많이 소요되겠죠?
            </p>
            <hr />
            <div style={{ width: "100%", textAlign: "center" }}>
              <img src={list2} alt="" style={{ width: "100%" }} />
            </div>
            <h2 style={{ marginTop: "50px" }}>연결리스트</h2>
            <p>
              연결리스트(Linked List)는 메모리에 저장된 물리적 위치나 순서와 상관없이, 연결로써 논리적인 순서를 표현하는 자료구조에요.
            </p>
            <p>
              순차리스트와 다르게, 각각의 독립적인 메모리에 저장되어 다음 주소값을 활용하여 마치 순차적으로 이루어진 것처럼 표현되죠.
            </p>
            <p>
              주소에 대한 정보가 더 필요하기 때문에 순차리스트에 비해 복잡해 보이고 어려워 보일 수도 있는데 왜 연결리스트를 사용하는 것일까요?
            </p>
            <p>
              연결리스트는 특정 데이터를 삽입하거나 삭제할 때 주소값만 수정하면 되기 때문에 순차리스트에 비해 연산속도가 빨라요.
            </p>
            <p>
              즉, 단순 탐색은 순차리스트가 더 효율적이지만 데이터의 추가, 삭제 작업에서는 연결리스트가 효율적이죠.
            </p>
          </Container>
        </div>
      }
    </div>
  )
}

export default List