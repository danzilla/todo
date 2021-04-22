import React, { useEffect, useState } from "react";
import { Container, Row, Col, Toast } from 'react-bootstrap';
import { connect } from "react-redux";

import './App.css';

import AddToDo from './AddToDo';
import ListToDo from './ListToDo';

// Redux Actionz
import {
  thunk_action_fetch_ToDo_Details
} from "../redux/actions/fetchAction";

// App
const App = (props) => {

  // Msg Notification
  const [msg, setMsg] = useState("")
  const [show, setShow] = useState(false);
  const MsgNotification = (state, msg) => {
    setMsg(msg)
    setShow(state)
  }

  // Render List Items
  let ViewListItems;
  let ToDOData = props.data.toDoList;
  if (props.data.isListEmpty === false) {
    ViewListItems = ToDOData.map((item) => <ListToDo
      MsgNotification={MsgNotification}
      id={item._id}
      key={item._id}
      ToDoItem={item.todoItem}
      isCompleted={item.isCompleted}
      addedOn={item.addedOn} />
    );
  } else { ViewListItems = "Loading" }

  // Every update
  useEffect(() => {
    thunk_action_fetch_ToDo_Details()
  }, [])

  // Return
  return (
    <Container className="ContainerPadding">
      <Row className="w-50 justify-content-md-center">
        <Col md={12} className="cardStyle">

          <Row className="container">
            <h1 className="heading"><strong>To Do</strong></h1>
          </Row>

          <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
            <Toast.Body>{msg}</Toast.Body>
          </Toast>

          <AddToDo MsgNotification={MsgNotification} />
          {ViewListItems}

        </Col>
      </Row>
    </Container>
  );
}
// Redux connect to store
const mapStateToProps = state => { return { data: state }; };
export default connect(mapStateToProps)(App);