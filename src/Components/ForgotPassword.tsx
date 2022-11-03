import 'bootstrap/dist/css/bootstrap.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../App.css";


const ForgotPassword = () => {

  return (
    <Container>
      <Row className="row1">
        <Col className="col2"></Col>
        <Col data-aos="fade-left">
          <div className="header">
            <h1>Forgot Password</h1>
            <p>New Password</p>
            <hr />
            <form action="" method="POST">
              <label htmlFor="email">Please enter email</label>
              <input
                type="text"
                placeholder="Enter Email"
                name="email"
                required
              />

              <div className="firstBtn">
                <button type="button" className="child" data-aos="flip-up" data-aos-duration="900">
                  Reset
                </button>
              </div>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ForgotPassword;
