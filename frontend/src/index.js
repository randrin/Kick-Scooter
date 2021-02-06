import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import routers from "./routes/routes";
import "./kick-scooter.scss";
import KickScooterHeader from "./components/KickScooterHeader";

ReactDOM.render(
  <React.StrictMode>
    <div class="page-wrapper">
      <BrowserRouter>
        <KickScooterHeader />
        <Route component={routers} />
      </BrowserRouter>
    </div>
  </React.StrictMode>,
  document.getElementById("kick-scooter")
);
