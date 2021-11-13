import React from "react"
import {Navbar, Container} from 'react-bootstrap'

export const Footer = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark">
        <Container style={{color: "#ccc"}}>
          Footer Info
        </Container>
      </Navbar>
    </>
  )
}
