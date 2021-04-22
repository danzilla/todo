import React from "react";
import { connect } from "react-redux";
import { Row, Col, Button, OverlayTrigger, Popover } from 'react-bootstrap';

import { 
  thunk_action_Update_ToDo_Details,
  thunk_action_Delete_ToDo_Details } from "../../redux/actions/fetchAction";

// ListToDo
const ListToDo = (props) => {

  // Update isCompleted
  const updateToDOComple = (status, id, ToDoItem) => {
    let payload = {id: id, isCompleted: status, ToDoItem: ToDoItem}
    thunk_action_Update_ToDo_Details(payload)
    let msg = ToDoItem + " status changed!"
    props.MsgNotification(true, msg)
  }
  // Remove Item from list
  const removeToDOItem = (id, ToDoItem) => {
    thunk_action_Delete_ToDo_Details(id)
    let msg = ToDoItem + " To-do item removed!"
    props.MsgNotification(true, msg)
  }

  // Display componet on Compted and inCompleted
  let ToDoListDisplay = [];
  if (props.isCompleted === true) {
    ToDoListDisplay.push(
      <Row key={props.id} className="container">
        <Col md={8}>
          <h4 style={{cursor: "pointer"}}
            onClick={() => {updateToDOComple(false, props.id, props.ToDoItem)}}>
            {props.ToDoItem}</h4>
        </Col>
        <Col md={{ span: 3, offset: 1 }}>
          <Row>
            <OverlayTrigger rootClose trigger="click" overlay={
              <Popover>
                <Popover.Content>
                  Are you really want to remove <strong>{props.ToDoItem}</strong>
                </Popover.Content>
                <Popover.Content>
                  <Button size="sm"
                    onClick={() => removeToDOItem(props.id, props.ToDoItem)}
                    variant="danger">Remove</Button>
                </Popover.Content>
              </Popover>}>
              <Button
                variant="danger"
                style={{
                  border: "#f17167",
                  backgroundColor: "#f17167",
                  color: "#fff"
                }}>Remove</Button>
            </OverlayTrigger>
          </Row>
        </Col>
        <hr className="w-100" />
      </Row>
    )
  } if (props.isCompleted === false) {
    ToDoListDisplay.push(
      <Row key={props.id} className="container">
        <Col md={{ span: 8 }}>
          <h4 
            onClick={() => {updateToDOComple(true, props.id, props.ToDoItem)}}
            style={{ color: "#cfd7ea" }}>
            <strike style={{cursor: "pointer"}}>{props.ToDoItem}</strike>
          </h4>
        </Col>
        <hr className="w-100" />
      </Row>
    )
  }
  // Render items
  return (ToDoListDisplay);
}
// Redux connect to store
const mapStateToProps = state => { return { data: state }; };
export default connect(mapStateToProps)(ListToDo);