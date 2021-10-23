import {Container, Row, Col } from "react-bootstrap"
import { FaUserTie, FaBuilding } from "react-icons/fa"
import { AdminLoginForm } from "../components/AdminLoginForm"

export const Home = () => {
  return (
    <>
      <div className="home-background">
        <Container className="home-container">
          <Row className="justify-content-md-center">
            <Col className="home-panel home-panel-left" lg={6} sm={12}>

              <p><FaBuilding size={120} /></p>

              <h3>Admin Panel</h3>
              <h6>(管理パネル)</h6>

              <br />

              <AdminLoginForm text="Go to Admin Panel" color="dark" route="/admin" />

              <div>User: abc@email.com | Password: password</div>

            </Col>
            <Col className="home-panel home-panel-right" lg={6} sm={12}>
            
              <p><FaUserTie size={120} /></p>

              <h3>Employee Panel</h3>
              <h6>(従業員パネル)</h6>

              <br />

              <AdminLoginForm text="Go to Employee Panel" color="danger" route="/employees" />

              <div>User: abc@email.com | Password: password</div>
            
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}