import React, { useState } from "react"
import { Col, Card, Button, Modal } from 'react-bootstrap'
import { FaUserEdit } from 'react-icons/fa'
import { Item } from '../types/ApiTypes'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const UserCard = (props: Item) => {

  // Modal state
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            <small><strong>Role:</strong> {props.role} | <strong>Birthdate:</strong> {props.age}</small>
          </Card.Text>
          <Button size="sm" variant="primary" onClick={() => handleShow()} style={{marginRight:'4px'}}>View Review <FaUserEdit /></Button>

          <Router>
            <Switch>
              <Route exact path="/admin">
                <Button size="sm" variant="primary" href={`/admin/item/${props.id}`}>Edit User <FaUserEdit /></Button>
              </Route>
              <Route exact path="/employees">
                <Button size="sm" variant="primary" href={`/employees/item/${props.id}/employeesreview`}>Add Review<FaUserEdit /></Button>
              </Route>
            </Switch>
          </Router>

        </Card.Body>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Review</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Corporate Review:</h4>
            <hr />
            {props.review}
            <br /><br />
            <h4>Employees Reviews:</h4>
            <hr />
            {props.employeesReviews.length > 0 ? 
            props.employeesReviews.map((item, index) => (
              <div key={item.id}>
                <strong>{item.name}</strong><br />
                {item.review}
                <hr />
              </div>
            )) : ''}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

      </Card>
    </Col>
  )
}
