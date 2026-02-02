import React, { useState, useEffect } from "react";
import "./Single.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import CircleLoader from "react-spinners/CircleLoader";

export const AuthenticateInvoice = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setLoading(false);
    setTimeout(() => {
      setLoading(false);
    }, 1);
  }, []);

  const [inputFile, setinputFile] = useState("");
  const [option, setOption] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); /* Prevents page refresh on submit */
  }

  return (
    <>
      <div className="single-page">
        <h2 className="large-text-white" >Authenticate E-Invoice</h2>
        <form className="single-form" onSubmit={handleSubmit}>
          {/* inputFile */}
          <label className="title-white" htmlFor="inputFile">Invoice Id</label>
          <input
            value={inputFile}
            onChange={(e) => setinputFile(e.target.value)}
            type="text"
            placeholder="12345"
            id="inputFile"
            name="inputFile"
            style={{marginBottom:"20px", marginTop: "10px"}}
          ></input>
          {/* Submit */}
          <button
            className="subtitle-steel-blue"
            onClick={navigate("../Success")}
            type="submit">Authenticate E-Invoice
          </button>
        </form>
      </div>
    </>
  );
};
