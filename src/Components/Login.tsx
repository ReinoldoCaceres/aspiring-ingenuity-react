import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../App.css";



const Login = () => {

  return (
    <Container>
      <Row className="row1">
        <Col className="col2"></Col>
        <Col data-aos="fade-left">
          <div className="header">
            <h1>Login</h1>
            <p>Welcome Back!</p>
            <hr />
            <form action="" method="POST" data-aos="flip-up" data-aos-duration="300">
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
              <label htmlFor="keepLogIn">Keep me logged in</label>

              <input type="checkbox" />

              <p>
                Forgot Password?{" "}
                <span onClick={() => console.log("Forgot")}>
                  Reset your Password
                </span>
              </p>

              <p>
                Don't have an account?{" "}
                <span onClick={() => console.log("SignUp")}>
                  Sign Up
                </span>
              </p>

              <div className="firstBtn">
                <button type="button" className="child" data-aos="flip-up" data-aos-duration="900">
                  Login
                </button>
              </div>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
