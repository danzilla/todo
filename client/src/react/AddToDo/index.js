import React, { useState } from "react";
import { connect } from "react-redux";
import { Row, Button, InputGroup, FormControl } from 'react-bootstrap';

// Redux Actionz
import { thunk_action_Add_ToDo_Details } from "../../redux/actions/fetchAction";

// AddToDo
const AddToDo = (props) => {
  const [newToDo, setNewToDO0] = useState("")
  // on Add
  const onSubmit = () => {
    if (newToDo) {
      thunk_action_Add_ToDo_Details(newToDo)
      let msg = newToDo + " Added!"
      props.MsgNotification(true, msg)
      setNewToDO0("")
    } if (!newToDo) {
      let msg = "To-Do item is empty, make a list!"
      props.MsgNotification(true, msg)
    }
  };
  // Return 
  return (
    <Row className="container">
      <InputGroup className="my-4" size="lg">
        <FormControl
          value={newToDo}
          onChange={e => setNewToDO0(e.target.value)}
          style={{
            border: "solid 2px #cfd7ea",
            backgroundColor: "#fff",
          }}
          placeholder="What need to be done?"
          aria-label="What need to be done?"
          onKeyPress={event => {
            if (event.key === "Enter") { onSubmit() }
          }} />
        <InputGroup.Append>
          <Button onClick={() => { onSubmit() }}
            variant="primary"
            style={{
              border: "#48919e",
              backgroundColor: "#48919e",
              color: "#fff"
            }}> Add
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </Row>
  );
}
// Redux connect to store
const mapStateToProps = state => { return { data: state }; };
export default connect(mapStateToProps)(AddToDo);