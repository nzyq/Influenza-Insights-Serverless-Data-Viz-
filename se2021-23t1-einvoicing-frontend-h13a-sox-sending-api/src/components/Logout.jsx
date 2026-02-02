import React, { useState } from "react";
import { Login } from "./Login";
import "./Style.css";

export const Logout = () => {
  const [currentForm, setCurrentForm] = useState("home");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div>
      {currentForm !== "login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : null}
    </div>
  );
};
