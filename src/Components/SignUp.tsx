import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../App.css";
import Dropdown from "react-bootstrap/Dropdown";

const SignUp = () => {

  return (
    <Container data-aos="zoom-out">
      <Row className="row1">
        <Col className="col2"></Col>
        <Col data-aos="fade-left">
          <div className="header">
            <h1>Sign Up</h1>
            <p>
              Already Registered?{" "}
              <span onClick={() => console.log("Login")}>Login</span>
            </p>
            <hr />
            <form action="" method="POST">
              <label htmlFor="name">Please enter your name</label>
              <input
                type="text"
                placeholder="Enter Name"
                name="name"
                required
              />

              <label htmlFor="email">Please enter email</label>
              <input
                type="text"
                placeholder="Enter Email"
                name="email"
                required
              />

              <label htmlFor="psw">Please enter password</label>
              <input
                type="password"
                placeholder="Enter Password"
                name="psw"
                required
              />

              <label htmlFor="psw-repeat">Please repeat password</label>
              <input
                type="password"
                placeholder="Repeat Password"
                name="psw-repeat"
                required
              />

              <label htmlFor="birthday">Please enter date of birth</label>
              <input type="date" id="birthday" name="birthday" />

              <Dropdown>
                <Dropdown.Toggle className="dropdown" id="dropdown-basic">
                  Choose your role
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Temporary Worker</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Clinic Personal</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <div className="firstBtn">
                <button type="button" className="child">
                  Next
                </button>
                <br />
                <br />
              </div>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
