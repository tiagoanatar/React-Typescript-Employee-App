import React, { useState, useEffect } from "react"
import { Col, Card, Button } from "react-bootstrap"
import { FaTimes, FaCheck } from "react-icons/fa"
import DataService from "../services/ApiRequest"
import { Item } from "../types/ApiTypes"

// interface CardProp { name: string ; review: string ; image: string ; id: number ; index: number ; idRoot: number }
interface CardProp {
  idRoot: number
}

export const UserCardAssign = (props: (Item & CardProp)) => {

  // Set review state
  const [assign, setAssign] = useState<boolean>(true)
  const [data, setData] = useState({ id: 0 })

  // Fetch all users
  const [users, setUsers] = useState<Array<Item>>([])
  const [complete, setComplete] = useState<boolean>(false)

  useEffect(() => {
    const getData = async () => {
        const data = await retrieveUsers()

        if (complete === true){
          const n = users[props.idRoot].assignedReviews.find(x => x.id === props.id)
          let isAssigned = false
          if (n !==  undefined){
            if (n.id === props.id){
              isAssigned = true
            }
            if (isAssigned === true){
              setAssign(false)
            }
          }
        }
    }
    getData()
  },[assign])

  // Fetch users
  const retrieveUsers = async () => {
    DataService.getAll()
      .then(response => {
        setUsers(response.data)
        setComplete(true)
      })
      .catch(e => {
        console.log(e)
      })
  }

  // Assing users
  const addUser = (idAssign: number) => {
    const obj = { id: idAssign }
    DataService.createAssign(props.idRoot, obj)
      .then(response => {
        setAssign(false)
      })
      .catch(e => {
        console.log(e)
      });
  }

  // Remove assing users
  const removeUser = (idAssign: number) => {
    let sortIndex = users[props.idRoot].assignedReviews.findIndex(x => x.id === idAssign);
    DataService.removeAssign(props.idRoot, sortIndex)
      .then(response => {
        setAssign(true)
      })
      .catch(e => {
        console.log(e)
      });
  }

  // Check if already assigned
  const checkIfAlreadyAssigned = () => {
    if (complete === true){
      if (users[props.idRoot].assignedReviews.some(e => e.id === props.id)) {
        return true
      }
    }
  }
  
  return (
    <Col>
    { users ? 
      (
      <Card>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          { checkIfAlreadyAssigned() ? 
          <Button size="sm" variant="secondary" onClick={() => removeUser(props.id)}>Unassign to Review <FaTimes /></Button>
            :
          <Button size="sm" variant="primary" onClick={() => addUser(props.id)}>Assign to Review <FaCheck /></Button>
          }
        </Card.Body>
      </Card>
      )
    : ('')}
    </Col>
  )
}
