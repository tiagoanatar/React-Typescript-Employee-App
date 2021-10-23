import React, { useState, useEffect, ChangeEvent } from "react"
import { RouteComponentProps } from "react-router-dom"
import DataService from "../services/ApiRequest"
import { Item } from "../types/ApiTypes"
import { UserCardReview } from "./UserCardReview"
import { UserCardAssign } from "./UserCardAssign"
import { NavBar } from "./NavBar"
import { Alert, Container, Row, Col, Form, Button } from "react-bootstrap"
import { FaUserEdit, FaUserTie, FaUserCheck, FaArrowLeft } from "react-icons/fa"
import { Footer } from "../components/Footer"

interface RouterProps { // type for `match.params`
  id: string // url string
}

type Props = RouteComponentProps<RouterProps>

export const EditUser: React.FC<Props> = (props: Props) => {
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

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setUser({ ...user, [name]: value })
  }

  // Update user
  const updateUser = () => {
    DataService.update(user.id, user)
      .then(response => {
        console.log(response.data)
        setMessage("The user was updated successfully!")
      })
      .catch(e => {
        console.log(e)
      })
  }

  // Deleter user
  const deleteUser = () => {
    DataService.remove(user.id)
      .then(response => {
        console.log(response.data)
        props.history.push("/admin")
      })
      .catch(e => {
        console.log(e)
      })
  }

  // fetch all users
  const [users, setUsers] = useState<Array<Item>>([])

  useEffect(() => {
    retrieveUsers()
  }, [])

  const retrieveUsers = () => {
    DataService.getAll()
      .then(response => {
        setUsers(response.data);
      })
      .catch(e => {
        console.log(e);
      })
  }

  return ( 
    <>
      <NavBar color={'danger'} url={'/admin'} />
      <Container style={{paddingTop:'40px', paddingBottom:'40px'}}>
        <Row className="justify-content-md-center">
          <Col>
            {user ? (
              <div className="edit-form">
                <h1><FaUserEdit /> Edit User: <span style={{color:'#ccc'}}>{user.name}</span> </h1>
                <hr />
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

                  {message.length > 0 ? (<Alert variant="primary">{message}</Alert>) : ''}

                  <Button onClick={updateUser} variant="dark" size="lg" style={{marginRight:'5px'}}>
                    Submit
                  </Button>
                  <Button onClick={deleteUser} variant="danger" size="lg">
                    Delete
                  </Button>
                </Form><br />
              
            </div>
          ) : (
            ''
          )}
          </Col>
        </Row>

        <br />

        <Row>
          <Col>
            <h3><FaUserTie /> Employees Reviews</h3>
            List of current reviews received by this user.
            <hr />
            {user.employeesReviews.length === 0 ? 'No reviews found.' : ''}
          </Col>
        </Row>
        <Row xs={1} md={4} className="g-4">
            {user &&
              user.employeesReviews.map((item: any, index: number) => (
                <UserCardReview key={`${index}12`} item={item} index={index} idRoot={user.id} />
            ))}
        </Row>

        <br />
        
        <Row>
          <Col>
            <h3><FaUserCheck /> Assign Reviews</h3>
            Assign employees to participate in another employee's performance review.
            <hr />
            {user ? '' : 'No users found.'}
          </Col>
        </Row>
        <Row xs={1} md={4} className="g-4">
            {users &&
            users.map((item, index) => (
              <UserCardAssign key={`${index}11`} {...item} idRoot={user.id} />
            ))}
        </Row>

        <br />
        <hr />
        <br />

        <Button href="/admin" variant="secondary" size="lg">
        <FaArrowLeft /> Back to Employees List
        </Button>

      </Container>

      <Footer />
    </>

   )
}

// <UserCardReview {...item} {...index} idRoot={user.id} />