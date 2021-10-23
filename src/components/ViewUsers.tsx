import React, { useState, useEffect } from "react";
import DataService from "../services/ApiRequest"
import { Item } from '../types/ApiTypes'
import { Row } from 'react-bootstrap'
import { UserCard } from './UserCard'

export const ViewUsers = () => {

  // fetch users
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
      <Row xs={1} md={4} className="g-4">
        {users &&
          users.map((user, index) => (
            <UserCard key={user.id} {...user} />
          ))}
      </Row>
    </>
   )
}