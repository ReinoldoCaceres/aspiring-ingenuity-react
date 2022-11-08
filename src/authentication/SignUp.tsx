import { ChangeEvent, useEffect, useState } from "react";
import AuthService from "../services/auth-service";
import UserModel from "../models/userLogin";

import "../App.css";

const SignUp = () => {

  useEffect(() => {
    document.title = "Sign Up";

  }, [])

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  function onChangeEmail(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function onChangePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  function onChangeRepeatPassword(event: ChangeEvent<HTMLInputElement>) {
    setRepeatPassword(event.target.value);
  }

  const handleSignUp = (e: any) => {
    e.preventDefault();

    //construct user object

    const userDataLogin: UserModel = {
      email: email,
      password: password,
    }
    //use the auth service to perform login operation
    AuthService.register(userDataLogin.email, userDataLogin.password, "CLINIC")
      .then(() => {
        console.log(userDataLogin)
        //TODO: change this console log by a navigate() to the home page
      },
        (err => {
          console.log(err)
        }));

  }


  return (
    <div className="container">
      <div className="row">
        <div className="col col2">
        </div>
        <div className="col">
          <div className="header">
            <h1>Sign Up</h1>
            <p>
              Already Registered?{" "}
              <span onClick={() => console.log("Login")}>Login</span>
            </p>
            <hr />
          </div>

          <form onSubmit={handleSignUp} id="LoginForm">
            {/* <label htmlFor="name">Please enter your name</label>
              <input
                type="text"
                placeholder="Enter Name"
                name="name"
                required
              /> */}

            <label htmlFor="email">Please enter email</label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              value={email} 
              onChange={onChangeEmail}
              required
            />

            <label htmlFor="psw">Please enter password</label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              value={password} 
              onChange={onChangePassword}
              required
            />

            <label htmlFor="psw-repeat">Please repeat password</label>
            <input
              type="password"
              placeholder="Repeat Password"
              name="psw-repeat"
              value={repeatPassword}
              onChange={onChangeRepeatPassword}
              required
            />

            {/* <label htmlFor="birthday">Please enter date of birth</label>
              <input type="date" id="birthday" name="birthday" /> */}

            <div className="firstBtn">
              <button type="submit" className="child">Next</button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
};

export default SignUp;
