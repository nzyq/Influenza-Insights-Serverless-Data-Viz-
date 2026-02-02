import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Style.css";
import "./Registration.css";

export const Register = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); /* Prevents page refresh on submit */
    try {
      // Post Request
      const response = await Axios.post(
        "http://h13a-sox-sending-api.ap-southeast-2.elasticbeanstalk.com/auth/register",
        {
          email: email,
          password: pass,
          name_first: firstName,
          name_last: lastName,
        }
      );
      // Handle response {200}
      console.log(response);
      //setReport(response.data);
      //localStorage.setItem("userDetails", JSON.stringify(response.data));
      props.onFormSwitch("login");
    } catch (err) {
      // Handle Invalid Email
      if (err.response.data.message === "<p>Email is not valid</p>") {
        console.log(err);
        alert("Invalid Email");
      } else if (err.response.data.message === "<p>Password is too short</p>") {
        console.log(err);
        alert("Password is too short");
      } else if (
        err.response.data.message === "<p>Email is already taken</p>"
      ) {
        console.log(err);
        alert("Email is already taken");
      } else if (
        err.response.data.message === "<p>First name is too short or long</p>"
      ) {
        console.log(err);
        alert("First name is too short or long");
      } else if (
        err.response.data.message === "<p>Last name is too short or long</p>"
      ) {
        console.log(err);
        alert("Last name is too short or long");
      } else {
        console.log(err);
      }
    }
  };

  return (
    <div className="auth-form-container">
      <h2 className="large-text-white">Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        {/* first name */}
        <label className="title-white" htmlFor="first_name">
          First Name
        </label>
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
          placeholder="Your First Name"
          name="first_name"
          id="first_name"
        ></input>
        {/* last name */}
        <label htmlFor="last_name" className="title-white">
          Last Name
        </label>
        <input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          type="text"
          placeholder="Your last Name"
          name="last_name"
          id="last_name"
        ></input>
        {/* email */}
        <label htmlFor="email" className="title-white">
          Email
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="abc123@gmail.com"
          name="email"
          id="email"
        ></input>
        {/* password */}
        <label htmlFor="password" className="title-white">
          Password
        </label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="*********"
          name="password"
          id="password"
        ></input>
        {/* submit */}
        {/* Submit */}
        <button className="subtitle-steel-blue" type="submit">
          Log In
        </button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch("login")}>
        Already have an account? Login Here
      </button>
    </div>
  );
};
