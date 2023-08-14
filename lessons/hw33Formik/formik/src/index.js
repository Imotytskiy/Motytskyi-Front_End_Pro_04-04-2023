import React from "react";
import ReactDOM from "react-dom/client";

import FormikForm from "../src/components/Form";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FormikForm />
  </React.StrictMode>
);

reportWebVitals();
