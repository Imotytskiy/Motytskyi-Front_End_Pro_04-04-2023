import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import SignupForm from "./components/SignupForm";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SignupForm />
  </React.StrictMode>
);

reportWebVitals();
