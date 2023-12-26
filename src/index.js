import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PrivacyPolicy } from "./routes/PrivacyPolicy/PrivacyPolicy";
import App from "./App";
import { PublicAgreement } from "./routes/PublicAgreement/PublicAgreement";
import { RefundPolicy } from "./routes/RefundPolicy/RefundPolicy";
import { SecurityPolicy } from "./routes/SecurityPolicy/SecurityPolicy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <App />,
  },
  {
    path: "privacy-policy",
    element: <PrivacyPolicy />,
  },
  {
    path: "public-agreement",
    element: <PublicAgreement />,
  },
  {
    path: "refund-policy",
    element: <RefundPolicy />,
  },
  {
    path: "security-policy",
    element: <SecurityPolicy />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
