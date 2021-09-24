import React, { useState } from 'react';
import '../../styles/gameDesc.css';
import Container from 'react-bootstrap/Container'
import { Row, Col } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Button from '@restart/ui/esm/Button';
import {Link} from 'react-router-dom';

function GameDetailPage(props) {
  // console.log(props)
  const type = props.match.params.category
  const gameId = props.match.params.gameId
  const data = props.location.state.data
  const [show, setShow] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseMenu = () => setShowMenu(false);
  const handleShowMenu = () => setShowMenu(true);

  return(
    <div>
      <h1>{data[gameId-1].title}</h1>
      <Container>
        <Row>
          <Col sm={2}>
            <Button onClick={handleShow}>설명</Button>
            <Button variant="primary" onClick={handleShowMenu}>
              Menu
            </Button>
          </Col>
          <Col sm={{ span: 8, offset: 1 }} className="game-play">
            게임 들어갈 위치
          </Col>
        </Row>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>게임 조작법</Modal.Title>
        </Modal.Header>
        <Modal.Body>자세한 게임 조작법은 여기에 들어갈 예정입니다!</Modal.Body>
        <Modal.Footer>
          <Link to={`/study/${type}/${data[gameId-1].id}`}>
            <button>관련 학습 하러가기</button>
          </Link>
        </Modal.Footer>
      </Modal>


      <Offcanvas show={showMenu} onHide={handleCloseMenu}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>다른 게임은 뭐가 있지?!</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          { type === "ds" ? 
           <div>
            <Link to={{
              pathname: "1",
              state: {
                data: data
              }
            }}>
            <button><span>스택</span></button>
            </Link>
            <Link to={{
              pathname: "2",
              state: {
                data: data
              }
            }}>
            <button><span>큐</span></button>
            </Link>
            <Link to={{
              pathname: "3",
              state: {
                data: data
              }
            }}>
            <button><span>트리</span></button>
            </Link>
            <Link to={{
              pathname: "4",
              state: {
                data: data
              }
            }}>
            <button><span>그래프</span></button>
            </Link>
            <Link to={{
              pathname: "5",
              state: {
                data: data
              }
            }}>
            <button><span>리스트</span></button>
            </Link>

           </div>
          :
          <div>
            <Link to={{
              pathname: "1",
              state: {
                data: data
              }
            }}>
            <button><span>정렬</span></button>
            </Link>
            <Link to={{
              pathname: "2",
              state: {
                data: data
              }
            }}>
            <button><span>전중후위순회</span></button>
            </Link>
            <Link to={{
              pathname: "3",
              state: {
                data: data
              }
            }}>
            <button><span>dfs bfs</span></button>
            </Link>
          </div> }
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
} 
  

export default GameDetailPage;