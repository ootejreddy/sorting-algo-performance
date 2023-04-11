import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import generateRandomData from "./sortingAlgorithms/generateRandomData";
import "bootstrap/dist/css/bootstrap.min.css";

export const dataSet: any = generateRandomData();
console.log(`the data set is.... ${JSON.stringify(dataSet)}`);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
