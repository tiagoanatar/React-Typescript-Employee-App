import {Container, Row, Col, Tabs, Tab} from "react-bootstrap"
import { FaBuilding } from "react-icons/fa"
import { NavBar } from "../components/NavBar"
import { AddUser } from "../components/AddUser"
import { ViewUsers } from "../components/ViewUsers"
import { Footer } from "../components/Footer"

export const Admin = () => {
  return (
    <>
      <NavBar color={"danger"} url={"/admin"} />

      <Container style={{paddingTop:"40px", paddingBottom:"40px"}}>
        <Row className="justify-content-md-center">
          <Col>

            <h1><FaBuilding /> Admin Panel</h1><br />

            <Tabs defaultActiveKey="viewAll" transition={true} id="noanim-tab-example" className="mb-3">
              <Tab eventKey="viewAll" title="View All Employees">
                <ViewUsers />
              </Tab>
              <Tab eventKey="addEmployee" title="Add Employee">
                Use the form below to add new employees and their reviews.
                <hr />
                <AddUser />  
              </Tab>
            </Tabs>

          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  )
}