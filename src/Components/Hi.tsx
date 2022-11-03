import { ChangeEvent, useEffect, useState } from "react";
import AuthService from "../services/auth-service";
import UserModel from "../models/user";


const Hi = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  useEffect(() => {
    document.title = "Login";

  }, [])

  function onChangeEmail(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function onChangePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();

    //construct user object

    const userDataLogin: UserModel = {
      email: email,
      password: password,
    }
    //use the auth service to perform login operation
    AuthService.login(userDataLogin.email, userDataLogin.password)
      .then(() => {
        console.log(userDataLogin)
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
            <h1>Login</h1>
            <p>Welcome Back!</p>
            <hr />
          </div>

          <form onSubmit={handleSubmit} id="LoginForm">
            <label htmlFor="email">Please enter email</label>
            <input type="text" placeholder="Enter Email" name="email"
              value={email} onChange={onChangeEmail}
              required />

            <label htmlFor="psw">Please enter password</label>
            <input type="password" placeholder="Enter Password" name="psw"
              value={password} onChange={onChangePassword }
              required />

            <div className="firstBtn">
              <button type="submit" className="child">Next</button>
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}

export default Hi