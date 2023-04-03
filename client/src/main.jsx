import React from "react";
import formula from './assets/img/MED0012x_100.jpg'
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <BrowserRouter>
        <App/>
        <div class="flex flex-wrap justify-left">
  <div class="w-6/12 sm:w-4/12 px-4">
    <img src={formula} alt="..." class="shadow rounded-full max-w-full h-auto align-middle border-none" />
  </div>
</div>
      </BrowserRouter>
  </React.StrictMode>
);
