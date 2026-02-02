import { useLocation } from "react-router-dom";
import "./Single.css";

export const Confirmation = (props) => {
  const report = JSON.parse(
    localStorage.getItem("report")
  ).communication_report;

  return (
    <div className="single-page">
      <h1>Confirmation Page</h1>
      <p>Date: {report.date}</p>
      <p>Description: {report.description}</p>
      <p>Recipient: {report.recipient}</p>
      <p>Sender: {report.sender}</p>
      <p>Status: {report.status}</p>
    </div>
  );
};
