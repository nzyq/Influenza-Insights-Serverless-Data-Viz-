import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import { Registration } from "./components/Registration";
import { Navbar } from "./components/Navbar";
import { SendInvoice } from "./components/SendInvoice";
import { Confirmation } from "./components/Confirmation";
import { RenderInvoice } from "./components/RenderInvoice";
import { AuthenticateInvoice } from "./components/AuthenticateInvoice";
import { CreateInvoice } from "./components/CreateInvoice";
import { StoreInvoice } from "./components/StoreInvoice";
import { Inbox } from "./components/Inbox";
import { Login } from "./components/Login";
import { InvoiceStorage } from "./components/InvoiceStorage";
import { Success } from "./components/Success";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="Registration" element={<Registration />}></Route>
        <Route path="SendInvoice" element={<SendInvoice />}></Route>
        <Route path="Confirmation" element={<Confirmation />}></Route>
        <Route path="RenderInvoice" element={<RenderInvoice />}></Route>
        <Route path="CreateInvoice" element={<CreateInvoice />}></Route>
        <Route
          path="AuthenticateInvoice"
          element={<AuthenticateInvoice />}
        ></Route>
        <Route path="StoreInvoice" element={<StoreInvoice />}></Route>
        <Route path="InvoiceStorage" element={<InvoiceStorage />}></Route>
        <Route path="Inbox" element={<Inbox />}></Route>
        <Route path="Login" element={<Login />}></Route>
        <Route path="Success" element={<Success />}></Route>
      </Routes>
    </>
  );
}

export default App;
