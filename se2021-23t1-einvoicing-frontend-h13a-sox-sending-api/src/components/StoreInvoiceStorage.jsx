import React, { useState } from "react";
import "./Single.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

export const StoreInvoice = () => {
  const [einvoice, setEinvoice] = useState("");

  const navigate = useNavigate();

  const userDetails = JSON.parse(localStorage.getItem("userDetails"));

  const handleSubmit = async (e) => {
    e.preventDefault(); /* Prevents page refresh on submit */
    try {
      // Post Request
      const response = await Axios.post(
        "http://h13a-sox-sending-api.ap-southeast-2.elasticbeanstalk.com/storage/upload",
        {
          user_id: userDetails.auth_user_id,
          data: einvoice,
        }
      );
      // Handle response {200}
      console.log(response);
      //setReport(response.data);
    } catch (err) {
      // Handle error
      //console.error(err);
      console.log(err);
    }
  };

  return (
    <div>
      <h2 className="large-text-white">Store E-Invoice</h2>
      <form className="single-form" onSubmit={handleSubmit}>
        {/* xml_data */}
        <label className="title-white" htmlFor="einvoice">
          XML Data
        </label>
        <input
          value={einvoice}
          onChange={(e) => setEinvoice(e.target.value)}
          type="text"
          placeholder="<b Invoice xml.....ns=\>"
          id="einvoice"
          name="einvoice"
          style={{ marginBottom: "20px", marginTop: "10px" }}
        ></input>

        {/* Submit */}
        <button className="subtitle-steel-blue" type="submit">
          Store E-Invoice
        </button>
      </form>
    </div>
  );
};
