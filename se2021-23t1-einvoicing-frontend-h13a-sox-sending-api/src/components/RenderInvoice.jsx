import React, { useState, useEffect } from "react";
import "./Single.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import CircleLoader from "react-spinners/CircleLoader";

export const RenderInvoice = () => {
  const [loading, setLoading] = useState(false);

  const [inputFile, setinputFile] = useState("");
  const [option, setOption] = useState("");
  const navigate = useNavigate();

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const retrieveAPI = async () => {
    try {
      // Post Request
      const response = await Axios.post(
        "https://einvoice-rendering-api.web.app/auth/login/",
        {
          email: "sixrip7er@gmail.com",
          password: "Bakhtiari2023",
        }
      );
      // Handle response {200}
      localStorage.setItem("token", JSON.stringify(response.data));
    } catch (err) {
      // Handle error
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault(); /* Prevents page refresh on submit */

    retrieveAPI();

    await delay(3000);

    const apiKey = JSON.parse(localStorage.getItem("token")).token;

    try {
      const data = {
        inputFile: inputFile,
        lang: "English",
        option: option,
      };
      const urlEncodedData = new URLSearchParams();
      for (const key in data) {
        urlEncodedData.append(key, data[key]);
      }

      const options = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: apiKey,
        },
      };

      const response = await Axios.post(
        "https://einvoice-rendering-api.web.app/render/pdf/v2/",
        urlEncodedData.toString(),
        options
      );
      console.log(response.data.url);
      // setLoading(true);
      await delay(15000);
      const newWindow = window.open(response.data.url);
    } catch (error) {
      console.error(error);
      if (error.response.status == 422) {
        console.log(error);
        alert(
          "Invoice could not be rendered. Please enter XML String from validated e-invoice!"
        );
      } else {
        console.log(error);
      }
    }
    setLoading(false);
  };

  return (
    <>
      <div className="single-page">
        {loading ? (
          <CircleLoader
            color={"#36d7b7"}
            loading={loading}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          <>
            <h2 className="large-text-white" >Render E-Invoice</h2>
            <form className="single-form" onSubmit={handleSubmit}>
              {/* inputFile */}
              <label className="title-white" htmlFor="inputFile">XML Data</label>
              <input
                value={inputFile}
                onChange={(e) => setinputFile(e.target.value)}
                type="text"
                placeholder="<?xml version= .... </Invoice>"
                id="inputFile"
                name="inputFile"
              ></input>

              {/* Option */}
              <label className="title-white" htmlFor="option">Option</label>
              <select
                value={option}
                onChange={(e) => setOption(e.target.value)}
                id="option"
                name="option"
                style={{padding:"10px", marginTop:"10px", marginBottom:"20px", borderRadius:"10px"}}
              >
                <option value="Simple">Simple</option>
                <option value="Modern">Modern</option>
              </select>
              {/* Submit */}
              <button className="subtitle-steel-blue" type="submit">Render E-Invoice</button>
            </form>
          </>
        )}
      </div>
    </>
  );
};
