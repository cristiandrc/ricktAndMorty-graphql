import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routers/App";
import { AppProvider } from "./Context/Context";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
