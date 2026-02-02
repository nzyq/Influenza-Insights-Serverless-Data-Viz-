import React, { useState, useEffect } from "react";
import "./InvoiceStorage.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import CircleLoader from "react-spinners/CircleLoader";
import { Popup } from "./Popup";
import { SendInvoice } from "./SendInvoiceStorage";
import { RenderInvoice } from "./RenderInvoiceStorage";
import { DeleteInvoice } from "./DeleteInvoiceStorage";
import { StoreInvoice } from "./StoreInvoiceStorage";

export const InvoiceStorage = () => {
  const [einvoice, setEinvoice] = useState("");
  const [loading, setLoading] = useState(false);
  const [data2, setData2] = useState([]);
  const [buttonPopupSend, setButtonPupupSend] = useState(false);
  const [buttonPopupDelete, setButtonPupupDelete] = useState(false);
  const [buttonPopupRender, setButtonPupupRender] = useState(false);
  const [buttonPopupStore, setButtonPupupStore] = useState(false);
  const [xmlData, setXmlData] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getInvoices();
  }, []);

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const userDetails = JSON.parse(localStorage.getItem("userDetails"));
  const data = JSON.parse(localStorage.getItem("invoices"));

  const getInvoices = async (e) => {
    //e.preventDefault(); /* Prevents page refresh on submit */
    setLoading(true);
    try {
      // Post Request

      const options = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await Axios.post(
        "http://h13a-sox-sending-api.ap-southeast-2.elasticbeanstalk.com/storage/list",
        {
          user_id: userDetails.auth_user_id,
        }
      );
      // Handle response {200}
      localStorage.setItem("invoices", JSON.stringify(response.data));
      setData2(response.data.invoices);

      console.log(response.data);
      //setReport(response.data);
    } catch (err) {
      // Handle error
      //console.error(err);
      console.log(err);
    }
    setLoading(false);
  };

  const handleDelete = async (e) => {
    setLoading(true);
    try {
      // Post Request
      const response = await Axios.post(
        "http://h13a-sox-sending-api.ap-southeast-2.elasticbeanstalk.com/storage/delete_invoice",
        {
          user_id: userDetails.auth_user_id,
          invoice_id: einvoice,
        }
      );
      // Handle response {200}
      console.log(response);
      await delay(500);
      getInvoices();
      //setReport(response.data);
    } catch (err) {
      // Handle error
      //console.error(err);
      console.log(err);
    }
    setLoading(false);
  };

  const handleStore = async (e) => {
    setLoading(true);
    try {
      // Post Request
      const response = await Axios.post(
        "http://h13a-sox-sending-api.ap-southeast-2.elasticbeanstalk.com/storage/upload",
        {
          user_id: userDetails.auth_user_id,
          data: xmlData,
        }
      );
      // Handle response {200}
      console.log(response);
      await delay(500);
      getInvoices();
      //setReport(response.data);
    } catch (err) {
      // Handle error
      //console.error(err);
      console.log(err);
    }
    setLoading(false);
  };

  return (
    <>
      <div className="single-page-Invoice">
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
            <h2 className="large-text-white">E-Invoice Storage</h2>
            <form className="single-form">
              {/* xml_data */}
              <label className="title-white" htmlFor="xml_data">
                XML Data
              </label>
              <input
                value={xmlData}
                onChange={(e) => setXmlData(e.target.value)}
                type="text"
                placeholder="<b Invoice xml.....ns=\>"
                id="xml_data"
                name="xml_data"
                style={{ marginBottom: "20px", marginTop: "10px" }}
              ></input>

              {/* Store Invoice */}
              <button
                className="subtitle-steel-blue"
                type="submit"
                onClick={() => handleStore()}
                style={{ marginBottom: "20px" }}
              >
                Store Invoice
              </button>
              {/* Invoice_ID */}
              <label className="title-white" htmlFor="einvoice">Invoice ID</label>
              <input
                value={einvoice}
                onChange={(e) => setEinvoice(e.target.value)}
                type="text"
                placeholder="2"
                id="einvoice"
                name="einvoice"
              ></input>
            </form>
            {/* Delete Invoice */}
            <button
              className="subtitle-steel-blue"
              type="submit"
              onClick={() => handleDelete()}
              style={{ marginBottom: "20px" }}
            >
              Delete Invoice
            </button>

            {/* Handle Render */}
            <button
              className="subtitle-steel-blue"
              onClick={() => setButtonPupupRender(true)}>
              Render Invoice
            </button>
            <Popup
              trigger={buttonPopupRender}
              setTrigger={setButtonPupupRender}
            >
              <RenderInvoice></RenderInvoice>
            </Popup>

            {/* Send Invoice */}
            <button
              className="subtitle-steel-blue"
              onClick={() => setButtonPupupSend(true)}>
              Send Invoice
            </button>
            <Popup trigger={buttonPopupSend} setTrigger={setButtonPupupSend}>
              <SendInvoice></SendInvoice>
            </Popup>

            <table>
              <thead>
                <tr>
                  <th>Invoice ID</th>
                  <th>Created Date</th>
                  <th>File Name</th>
                </tr>
              </thead>
              <tbody>
                {data2.map((item) => (
                  <tr>
                    <td>{item.invoice_id}</td>
                    <td>{item.created_date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </>
  );
};
