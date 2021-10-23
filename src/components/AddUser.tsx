import React, { useState, ChangeEvent } from "react"
import DataService from "../services/ApiRequest"
import { BaseItem } from '../types/ApiTypes'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'

export const AddUser: React.FC = () => {

  const initialUserState = {
    name: '',
    role: '',
    age: '',
    image: 'https://randomuser.me/api/portraits/men/15.jpg',
    review: '',
    assignedReviews: [],
    employeesReviews: []
  }

  const [user, setUser] = useState<BaseItem>(initialUserState)
  const [submitted, setSubmitted] = useState<boolean>(false)

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setUser({ ...user, [name]: value })
    console.log(user)
  };

  const addUser = () => {

    // User data
    var data = {
      name: user.name,
      role: user.role,
      age: user.age,
      image: user.image,
      review: user.review,
      assignedReviews: [],
      employeesReviews: []
    }

    // Submit user
    DataService.create(data)
      .then(response => {
        setUser({
          name: response.data.name,
          role: response.data.role,
          age: response.data.age,
          image: response.data.image,
          review: response.data.review,
          assignedReviews: response.data.assignedReviews,
          employeesReviews: response.data.employeesReviews
        })
        setSubmitted(true);
        console.log(response.data)
      })
      .catch(e => {
        console.log(e);
      })
  }

  const newUser = () => {
    setUser(initialUserState)
    setSubmitted(false)
  }

  return ( 

    <Container>
      <Row>
        <Col>
        
          <div className="submit-form">
            {submitted ? (
            <div>
              <h4>You submitted successfully!</h4>
              <Button onClick={newUser} variant="dark" size="lg">
                Submit
              </Button>
            </div>
            ) : (
            <Form>

              <Form.Floating className="mb-3">
                <Form.Control 
                  id="name" 
                  type="text" 
                  required 
                  value={user.name} 
                  onChange={handleInputChange} 
                  name="name" 
                />
                <label htmlFor="name">Full Name</label>
              </Form.Floating>

              <Form.Floating className="mb-3">
                <Form.Control 
                  id="role" 
                  type="text" 
                  required 
                  value={user.role} 
                  onChange={handleInputChange} 
                  name="role" 
                />
                <label htmlFor="role">Role</label>
              </Form.Floating>

              <Form.Floating className="mb-3">
                <Form.Control 
                  id="age" 
                  type="date" 
                  required 
                  value={user.age} 
                  onChange={handleInputChange} 
                  name="age" 
                />
                <label htmlFor="age">Age</label>
              </Form.Floating>

              <Form.Floating className="mb-3">
                <Form.Control 
                  id="image" 
                  type="text" 
                  required 
                  value={user.image} 
                  onChange={handleInputChange} 
                  name="image" 
                />
                <label htmlFor="image">Employee Photo URL</label>
              </Form.Floating>

              <Form.Floating className="mb-3">
                <Form.Control 
                  id="review" 
                  as="textarea"
                  required 
                  value={user.review} 
                  onChange={handleInputChange} 
                  name="review" 
                  style={{ height: '140px' }}
                />
                <label htmlFor="review">Corporate Review</label>
              </Form.Floating>

              <Button onClick={addUser} variant="dark" size="lg">
                Submit
              </Button>

            </Form>
        )}
      </div>
          
        </Col>
      </Row>
    </Container>

   )
}