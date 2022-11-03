
const Hi = () => {
  return (
    <div className="container">
        <div className="row">
            <div className="col col2">
            </div>
            <div className="col">
                <div className="header">
                    <h1>Login</h1>
                    <p>Welcome Back!</p>
                    <hr/>
                </div>

                    <form action="action_page.php">
                        <label htmlFor="email">Please enter email</label>
                        <input type="text" placeholder="Enter Email" name="email" required/>

                        <label htmlFor="psw">Please enter password</label>
                        <input type="password" placeholder="Enter Password" name="psw" required/>

                        <div className="firstBtn">
                            <button type="button" className="child">Next</button>
                        </div>
                    </form>

            </div>
        </div>
    </div>
  )
}

export default Hi