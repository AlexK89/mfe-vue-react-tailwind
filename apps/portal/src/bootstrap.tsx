import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

let root: any = null;

const mountPortal = (element: any) => {
  if (!root) {
    root = ReactDOM.createRoot(element as HTMLElement);

    return root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
};

const devRoot = document.querySelector("#portal");
if (devRoot) {
  mountPortal(devRoot);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export { mountPortal };
