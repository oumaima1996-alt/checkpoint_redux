import React, {useState} from 'react'
import {Button , Modal, FormControl, InputGroup} from 'react-bootstrap'
import {connect} from "react-redux"
import {edit_todo} from '../redux/action/action.js'


const EiteTodo = ({todo, edit_todo}) => {
    const [text, setText]= useState(todo.text)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSubmit = () => {
        const editedtodo = {
            ...todo, text : text, 
            
        }
        edit_todo(editedtodo)
        setText('')

    }
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
        edit
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body><InputGroup className="mb-3">
    <FormControl
      
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
      value = {text}
      onChange = {(e) =>setText(e.target.value)}
    />
    
  </InputGroup></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default connect(null, {edit_todo}) (EiteTodo)
