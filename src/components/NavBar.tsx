import React from "react"
import {Navbar, Container, Nav } from 'react-bootstrap'
import { FaSignOutAlt } from 'react-icons/fa'

interface Props { // type for `match.params`
  color: string
  url: string // url string
}

//type Props = RouteComponentProps<RouterProps>;

export const NavBar = (props: Props) => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg={props.color} variant="dark">
        <Container>
        <Navbar.Brand href="#home">Demo-App</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href={props.url}>Home</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/">Logout <FaSignOutAlt /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    </>
  )
}