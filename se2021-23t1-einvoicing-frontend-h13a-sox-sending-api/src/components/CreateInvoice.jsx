import React, { useState } from "react";
import "./Single.css";
import Axios from "axios";
import axios from "axios";

export const CreateInvoice = (props) => {
  const [type, setType] = useState("");
  const [file, setFile] = useState(null);

  const url =
    "http://seng2021-f12a-api-env.eba-pymctycp.ap-southeast-2.elasticbeanstalk.com";

  const handleSubmit = async (e) => {
    e.preventDefault(); /* Prevents page refresh on submit */
  };

  return (
    <>
      <div className="single-page">
        <h2 className="large-text-white">Create E-Invoice</h2>
        <form className="single-form" onSubmit={handleSubmit}>
          {/* type of input */}
          <label className="title-white" htmlFor="type">
            Type of Input
          </label>
          <input
            value={type}
            onChange={(e) => setType(e.target.value)}
            type="text"
            placeholder="json or xml or yaml"
            id="type"
            name="type"
          ></input>

          {/* file */}
          <label className="title-white" htmlFor="file">
            File Upload
          </label>
          <input
            value={file}
            onChange={(e) => setFile(e.target.value)}
            type="file"
            id="file"
            name="file"
          ></input>

          {/* Submit */}
          <button className="subtitle-steel-blue" type="submit">
            Create E-Invoice
          </button>
        </form>
      </div>
    </>
  );
};
