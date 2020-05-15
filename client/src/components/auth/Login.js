import React, { useState, useContext } from "react";
import AlertContext from "../../context/alert/AlertContext";

const Login = () => {
  const alertContext = useContext(AlertContext);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setAlert("Please enter all fields", "danger");
    } else {
      console.log("Login Complete");
      console.log(user);
    }
  };
  return (
    <div className="form-container">
      <h1>
        Account <span className="text-primary">Login</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            required
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            required
            minLength="6"
          ></input>
        </div>
        <input
          type="submit"
          value="Login"
          className="btn btn-primary btn-block"
        ></input>
      </form>
    </div>
  );
};

export default Login;
