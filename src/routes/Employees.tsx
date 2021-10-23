import {Container, Row, Col, Tabs, Tab} from "react-bootstrap"
import { FaUserTie } from "react-icons/fa"
import { NavBar } from "../components/NavBar"
import { ViewUserEmployee } from "../components/ViewUserEmployee"
import { Footer } from "../components/Footer"

export const Employees = () => {
  return (
    <>
      <NavBar color={'dark'} url={'/employees'} />

      <Container style={{paddingTop:'40px', paddingBottom:'40px'}}>
        <Row className="justify-content-md-center">
          <Col>

            <h1><FaUserTie /> Employees Panel</h1><br />

            <Tabs defaultActiveKey="viewAll" transition={true} id="noanim-tab-example" className="mb-3">
              <Tab eventKey="viewAll" title="View All Employees">
                <ViewUserEmployee />
              </Tab>
            </Tabs>

          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  )
}