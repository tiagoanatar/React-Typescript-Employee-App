import React, { useState, useEffect, ChangeEvent } from "react"
import { RouteComponentProps } from "react-router-dom"
import DataService from "../services/ApiRequest"
import { ItemReview, Item } from "../types/ApiTypes"
import { NavBar } from "./NavBar"
import { Alert, Container, Row, Col, Form, Button } from "react-bootstrap"
import { FaUserEdit, FaArrowLeft } from "react-icons/fa"
import { Footer } from "../components/Footer"

interface RouterProps { // type for `match.params`
  id: string // url string
}

type Props = RouteComponentProps<RouterProps>

export const AddReviewEmployee: React.FC<Props> = (props: Props) => {

  const initiallState = {
    id: 0,
    name: '',
    role: '',
    age: '',
    image: '',
    review: '',
    assignedReviews: [],
    employeesReviews: []
  }
  const [user, setUser] = useState<Item>(initiallState)
  const [message, setMessage] = useState<string>("")

  // Fetch single user data
  const fetchUser = (id: string) => {
    DataService.get(id)
      .then(response => {
        setUser(response.data)
        console.log(response.data)
      })
      .catch(e => {
        console.log(e)
      })
  }

  useEffect(() => {
    fetchUser(props.match.params.id);
  }, [props.match.params.id])

  // Data update

  const initiallStateUpdate = {
    id: 0,
    name: '',
    image: 'https://randomuser.me/api/portraits/men/55.jpg',
    review: '',
  }
  const [update, setUpdate] = useState<ItemReview>(initiallStateUpdate)

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setUpdate({ ...update, [name]: value })
  }

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target
    setUpdate({ ...update, [name]: value })
  }

  // Update user
  const updateUser = () => {
    DataService.createReview(user.id, update)
      .then(response => {
        console.log(response.data)
        setMessage("The user was updated successfully!")
      })
      .catch(e => {
        console.log(e)
      })
  }

  return ( 
    <>
      <NavBar color={'dark'} url={'/employees'} />
      <Container style={{paddingTop:'40px', paddingBottom:'40px'}}>
        <Row className="justify-content-md-center">
          <Col>
            {user ? (
              <div className="edit-form">
                <h1><FaUserEdit /> Add Review to User: <span style={{color:'#ccc'}}>{user.name}</span> </h1>
                <hr />
                <Form>

                <Form.Floating className="mb-3">
                    <Form.Control 
                      id="name" 
                      type="text" 
                      required 
                      value={update.name} 
                      onChange={handleInputChange} 
                      name="name" 
                    />
                    <label htmlFor="name">Full Name</label>
                  </Form.Floating>

                  <Form.Floating className="mb-3">
                    <Form.Control 
                      id="review" 
                      as="textarea"
                      required 
                      value={update.review} 
                      onChange={handleInputChange} 
                      name="review" 
                      style={{ height: '140px' }}
                    />
                    <label htmlFor="review">Corporate Review</label>
                  </Form.Floating>

                  <Form.Select name="id"  aria-label="Select User" onChange={handleSelectChange} >
                  <option>Select User</option>
                    {user.assignedReviews.map((item, index) => (<option value={item.id}>{item.id}</option>))}
                  </Form.Select>

                  <br />

                  <Form.Floating className="mb-3">
                    <Form.Control 
                      id="image" 
                      type="text" 
                      required 
                      value={update.image} 
                      onChange={handleInputChange} 
                      name="image" 
                    />
                    <label htmlFor="image">Employee Photo URL</label>
                  </Form.Floating>

                  <br />
                  {message.length > 0 ? (<Alert variant="primary">{message}</Alert>) : ''}
                  
                  <Button onClick={updateUser} variant="dark" size="lg" style={{marginRight:'5px'}}>
                    Submit
                  </Button>
                </Form>
              
            </div>
          ) : (
            ''
          )}
          </Col>
        </Row>

        <br />
        <hr />
        <br />

        <Button href="/employees" variant="secondary" size="lg">
        <FaArrowLeft /> Back to Employees List
        </Button>

      </Container>

      <Footer />
    </>

   )
}