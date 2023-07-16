import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Registration = ({toggleForm}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirectToLogin, setRedirectToLogin] = useState(false);

  const handleRegistration = async e => {
    e.preventDefault();

    try {
      console.log("inside register handlesubmit");
      const response = await axios.post(
        "http://localhost:5000/api/users/register",
        {
          username,
          email,
          password
        }
      );
      console.log(response);

      if (response.data === "User already registered!") {
        alert("User already registered!");
      } else if (response.data === "All fields are mandatory!") {
        alert("All fields are mandatory!");
      } else {
        alert("Registration Completed! Now login.");
        setRedirectToLogin(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // if (redirectToLogin) {
  //   return <Redirect to="/login" />;
  // }

  const handleLoginClick = (toggleForm) => {
    toggleForm("login");
  }

  return (
    <div>
      <h1>Registration</h1>
      <form onSubmit={handleRegistration}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit" onClick={handleLoginClick}>Register</button>
      </form>
      <p>
        Already have an account? <Link to="/auth" onClick={handleLoginClick}>Login</Link>
      </p>
    </div>
  );
};

export default Registration;
