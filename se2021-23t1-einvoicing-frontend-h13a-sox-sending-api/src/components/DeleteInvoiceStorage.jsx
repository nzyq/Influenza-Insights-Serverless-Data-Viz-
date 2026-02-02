import React, { useState, useEffect } from "react";
import "./Registration.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import CircleLoader from "react-spinners/CircleLoader";

export const DeleteInvoice = (props) => {
  const [invoice_id, setInvoice_Id] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const userDetails = JSON.parse(localStorage.getItem("userDetails"));

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const handleSubmit = async (e) => {
    setLoading(true);
    try {
      // Post Request
      const response = await Axios.post(
        "http://h13a-sox-sending-api.ap-southeast-2.elasticbeanstalk.com/storage/delete_invoice",
        {
          user_id: userDetails.auth_user_id,
          invoice_id: invoice_id,
        }
      );
      // Handle response {200}
      console.log(response);
      await delay(500);
      //setReport(response.data);
    } catch (err) {
      // Handle error
      //console.error(err);
      console.log(err);
    }
    setLoading(false);
  };

  return (
    <div>
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
          <h2 className="large-text-white">Send E-Invoice</h2>
          <form className="send-Invoice-form" onSubmit={handleSubmit}>
            {/* Invoice ID */}
            <label className="title-white" htmlFor="xml_data">
              Invoice ID
            </label>
            <input
              value={invoice_id}
              onChange={(e) => setInvoice_Id(e.target.value)}
              type="text"
              placeholder="Invoice_id"
              id="invoice_id"
              name="invoice_id"
              style={{ marginBottom: "20px" }}
            ></input>

            {/* Submit */}
            <button className="subtitle-steel-blue" type="submit">
              Send E-Invoice
            </button>
          </form>
        </>
      )}
    </div>
  );
};
