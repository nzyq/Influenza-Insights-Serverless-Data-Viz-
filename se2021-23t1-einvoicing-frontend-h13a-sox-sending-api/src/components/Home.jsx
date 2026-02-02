import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Home.css";
import "./Style.css";
import logo from "../icons/Logo.png";
import logout from "../icons/Logout.png";
import login from "../icons/Login.png";
import create from "../icons/CreateInvoice.png";
import authenticate from "../icons/AuthenticateInvoice.png";
import render from "../icons/RenderInvoice.png";
import my_invoices from "../icons/MyInvoices.png";
import send from "../icons/SendInvoice.png";
import inbox from "../icons/CheckInbox.png";

export const Home = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const userDetails = JSON.parse(localStorage.getItem("userDetails"));

  function logOut() {
    userDetails === null
      ? navigate("/Registration")
      : localStorage.removeItem("userDetails");
    navigate("/Registration");
  }

  return (
    <div className="home-page">
      <h1
        style={{
          position: "absolute",
          top: "100px",
          whiteSpace: "nowrap",
        }}
        className="large-text-white"
      >
        Welcome! How can we help you today?
      </h1>
      <div className="navigation-c">
        <img className="logo-image" src={logo} alt="SOX" />
        {/* Logout Button */}
        <logout-button onClick={() => logOut()}>
          {userDetails === null ? (
            <img className="logout" src={login} alt="Login" />
          ) : (
            <img className="logout" src={logout} alt="Logout" />
          )}
        </logout-button>
      </div>
      <div>
        {/* Create Invoice Button */}
        <home-page-button
          style={{ position: "absolute", left: "300px", top: "225px" }}
          onClick={() => navigate("../CreateInvoice")}
        >
          <img className="home-buttons" src={create} alt="Create Invoice" />
        </home-page-button>
      </div>
      <div>
        {/* Authenticate Invoice Button */}
        <home-page-button
          style={{ position: "absolute", left: "600px", top: "225px" }}
          onClick={() => navigate("../AuthenticateInvoice")}
        >
          <img
            className="home-buttons"
            src={authenticate}
            alt="Authenticate Invoice"
          />
        </home-page-button>
      </div>
      <div>
        {/* Render Invoice Button */}
        <home-page-button
          style={{ position: "absolute", left: "900px", top: "225px" }}
          onClick={() => navigate("../RenderInvoice")}
        >
          <img className="home-buttons" src={render} alt="Render Invoice" />
        </home-page-button>
      </div>
      <div>
        {/* My Invoices Button */}
        <home-page-button
          style={{ position: "absolute", left: "300px", top: "525px" }}
          onClick={() => navigate("../InvoiceStorage")}
        >
          <img className="home-buttons" src={my_invoices} alt="My Invoices" />
        </home-page-button>
      </div>
      <div>
        {/* Send Invoice Button */}
        <home-page-button
          style={{ position: "absolute", left: "600px", top: "525px" }}
          onClick={() => navigate("../SendInvoice")}
        >
          <img className="home-buttons" src={send} alt="Send Invoice" />
        </home-page-button>
      </div>
      <div>
        {/* Inbox Button */}
        <home-page-button
          style={{ position: "absolute", left: "900px", top: "525px" }}
          onClick={() => navigate("../Inbox")}
        >
          <img className="home-buttons" src={inbox} alt="Inbox" />
        </home-page-button>
      </div>
    </div>
  );
};
